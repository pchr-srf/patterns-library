import morph from './morph';
import specialElHandlers from './special-el-handlers';

const TEXT_NODE = 3;
// var DEBUG = false

export default componentMorph;

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function componentMorph(oldTree, newTree) {
  // if (DEBUG) {
  //   console.log(
  //   'componentMorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  if (typeof oldTree !== 'object') {
    throw new Error('componentMorph: oldTree should be an object');
  }

  if (typeof newTree !== 'object') {
    throw new Error('componentMorph: newTree should be an object');
  }

  const tree = walk(newTree, oldTree);
  // if (DEBUG) console.log('=> morphed\n  %s', tree.outerHTML)
  return tree;
}

// Walk and morph a dom tree
function walk(newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode;
  } else if (!newNode) {
    return null;
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode;
  } else if (newNode.tagName !== oldNode.tagName) {
    return newNode;
  }

  morph(newNode, oldNode);

  if (!oldNode.skipChildren || !oldNode.skipChildren()) {
    updateChildren(newNode, oldNode);
  }
  // at this point the children nodes have already been morphed and it is safe to apply special el handlers.
  specialElHandlers(newNode, oldNode);

  return oldNode;
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren(newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  let oldChild;
  let newChild;
  let morphed;
  let oldMatch;

  // The offset is only ever increased, and used for [i - offset] in the loop
  let offset = 0;

  /* eslint-disable no-plusplus */
  for (let i = 0; ; i++) {
    oldChild = oldNode.childNodes[i];
    newChild = newNode.childNodes[i - offset];
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break;

      // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild);
      i--;

      // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild);
      offset++;

      // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild);
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild);
        offset++;
      }

      // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null;

      // Try and find a similar node somewhere in the tree
      for (let j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j];
          break;
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch);
        if (morphed !== oldMatch) {
          offset++;
        }

        oldNode.insertBefore(morphed, oldChild);

        // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild);
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild);
          offset++;
        }

        // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild);
        offset++;
      }
    }
  }
}

function same(a, b) {
  if (a.id) {
    return a.id === b.id;
  }
  if (a.isSameNode) {
    return a.isSameNode(b);
  }
  if (a.tagName !== b.tagName) {
    return false;
  }
  if (a.type === TEXT_NODE) {
    return a.nodeValue === b.nodeValue;
  }
  return false;
}