const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

let lastMainButton = null;

const disable = (element, parent) => {
  element.classList.remove('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  element.classList.add('o-sg-section__button--selected');
  parent.querySelector(sectionSelector(element)).classList.add('o-sg-section__section--visible');
};

const switchAtomicElemenetsTo = (elementGroupName = '', button) => {
  const allCategories = document.querySelectorAll('[data-atomic-category]');
  Array.from(allCategories).forEach((element) => {
    element.classList.remove('o-sg-section--visible');
  });

  const dataSelector = elementGroupName ? `="${elementGroupName}"` : '';

  const filteredCategories = document.querySelectorAll(`[data-atomic-category${dataSelector}]`);
  Array.from(filteredCategories).forEach((element) => {
    element.classList.add('o-sg-section--visible');
  });

  button.classList.add('o-sg-section__button--selected');

  if (lastMainButton) {
    lastMainButton.classList.remove('o-sg-section__button--selected');
  }

  lastMainButton = button;
};

document.addEventListener('DOMContentLoaded', () => {
  // all sections's buttons toggle
  const sections = document.querySelectorAll('.js--section');

  Array.from(sections).forEach((section) => {
    let lastEnabled = null;
    const toggleButtons = section.querySelectorAll('.js--toggle');
    const arr = Array.from(toggleButtons);
    [lastEnabled] = arr;
    arr.forEach((button) => {
      button.addEventListener('click', () => {
        disable(lastEnabled, section);
        enable(button, section);
        lastEnabled = button;
      });
    });
  });

  // main buttons atomic toggle
  const mainButtons = document.querySelectorAll('.js--atomic-switch');
  Array.from(mainButtons).forEach((button, index) => {
    if (index === 0) {
      lastMainButton = button;
    }
    button.addEventListener('click', () => {
      const switchTo = button.getAttribute('data-atomic-switch-to');
      switchAtomicElemenetsTo(switchTo, button);
    });
  });
});
