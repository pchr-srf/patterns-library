# AXA Table Sortable

_WARNING: For mobile use, currently the innerscroll property must be set. This restriction will be lifted in the future._


## Usage

Install it with your CLI:
`npm install @axa-ch/table-sortable`

Include it in your HTML like this:

```html
<axa-table-sortable
  innerscroll="500"
  model="HERE A JSON OF YOUR MODEL, SEE BELOW FOR FORMAT"
>
</axa-table-sortable>
```

If you have a frontend stack, add the dependency like so:

```js
import '@axa-ch/table-sortable';

// rest of your code here
```

If you use HTML pages only, import the script like so:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <axa-table-sortable
      innerscroll="500"
      model='{"thead":[{"html":"Title 0","sort":"ASC"},{"html":"Title 1","sort":"ASC"},{"html":"Title 3","sort":"DESC"},{"html":"Title 2"}],"tbody":[[{"html":"<span>11 Test</span>"},{"html":"<span>Hello</span>"},{"html":"<span>Cell 2</span>"},{"html":"A"}],[{"html":"<span>1 Test</span>"},{"html":"<span>zHello 2</span>"},{"html":"<span>Cell 2</span>"},{"html":"B"}],[{"html":"<span>2 Test</span>"},{"html":"<span>aHello 3</span>"},{"html":"<span>Cell 2</span>"},{"html":"C"}]]}'
    >
    </axa-table-sortable>
    <script src="node_modules/@axa-ch/table-sortable/dist/index.js"></script>
  </body>
</html>
```

### React

Create a React-ified sortable table with the createElement function from your React version and then use it like this:

```js
// Here an example from create-react-app
import React, { Component, createElement } from 'react';
import createAXATableSortable from '@axa-ch/table-sortable/lib/index.react';

import './App.css';

const AXATableSortableReact = createAXATableSortable(createElement);

const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
  ],
  tbody: [
    [
      { html: '<span>11 Some Text</span>' },
      { html: '<span>Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Some Text</span>' },
      { html: '<span>Z Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Some Text</span>' },
      { html: '<span>A Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <AXATableSortableReact innerscroll="500" model={model} />
        </p>
      </div>
    );
  }
}

export default App;
```

## Properties

| Attribute           | Details                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `innerscroll="500"` | set a min width and if the viewport width is less than _innerscroll_ pixels, add a horizontal scrollbar. This property obligatorily requires thead and tbody. |
| `model="{}"`        | sets the model from which the component should render. See example below.                      |

Model example:

```js
const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
  ],
  tbody: [
    [
      { html: '<span>11 Test</span>' },
      { html: '<span>Hello</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Test</span>' },
      { html: '<span>Z Hello 2</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Test</span>' },
      { html: '<span>A Hello 3</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};
```

## Example

## Variants

None