import React from 'react';
import { storiesOf } from '@storybook/html';
import ReactDOM from 'react-dom';

import DemoButton from './DemoButton';
import DemoControlledInputsApp from '../demo-controlled-inputs/App';
import DemoDynamicChildrenApp from '../demo-dynamic-children/App';

storiesOf('Demos', module)
  .add('Button with React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoButton />, div);
    return div;
  })
  .add('Controlled Inputs React', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoControlledInputsApp />, div);
    return div;
  })
  .add('Dynamic Children React', () => {
    const div = document.createElement('div');
    div.id = 'root-dynamic-children';
    ReactDOM.render(<DemoDynamicChildrenApp />, div);
    return div;
  });
