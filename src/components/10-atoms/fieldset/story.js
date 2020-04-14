/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Atoms/Fieldset', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Fieldset', () => {
    const error = text('error', '');

    const wrapper = document.createElement('div');
    const template = html`
      <axa-text variant="size-3">
        Resize your browser to a tablet or mobile width to see the effect of
        'horizontal="stretch"'</axa-text
      >
      <br />

      <axa-fieldset error="${error}">
        <axa-checkbox
          label="I agree to conditions of data protection."
          error="Please accept our terms and conditions."
        ></axa-checkbox>
        <axa-checkbox label="I accept the conditions"></axa-checkbox>
        <axa-checkbox
          label="I want to sign up for the newsletter"
          checked
          disabled
        ></axa-checkbox>
      </axa-fieldset>
    `;

    render(template, wrapper);
    return wrapper;
  });
