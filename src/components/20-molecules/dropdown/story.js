/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyDropdown = storiesOf('Atoms/Textarea', module);
storyDropdown.addDecorator(withKnobs);
storyDropdown.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyDropdown.add('Textarea', () => {
  const label = text('label*', '');
  const name = text('name*', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', '');
  const counterMax = text('countermax', '');
  const maxLength = text('maxlength', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-dropdown
      name="${name}"
      label="${label}"
      placeholder="${placeholder}"
      error="${error}"
      counter="${counter}"
      countermax="${counterMax}"
      maxlength="${maxLength}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
    ></axa-dropdown>
  `;

  render(template, wrapper);
  return wrapper;
});


// import { storiesOf } from '@storybook/html';
// import './index';
// import Readme from './README.md';
//
// storiesOf('Molecules/Dropdown', module)
//   .addParameters({
//     readme: {
//       sidebar: Readme,
//     },
//   })
//   .add(
//     'Dropdown',
//     () => `<axa-dropdown label="Dropdown Label" data-test-id="dropdown" disabled
//     items='[
//     {"name": "Please Select", "value": "Please Select", "disabled": true },
//     {"name": "Item 1", "value": "Item 1",  "selected": true },
//     {"name": "Item 2", "value": "Item 2" },
//     {"name": "Item 3", "value": "Item 3" }
//     ]'></axa-dropdown>
//     `
//   )
//   .add(
//     'Dropdown Forced Native',
//     () => `<axa-dropdown native defaulttitle="Please Select" data-test-id="dropdown-native"
//   items='[
//   {"name": "Item 1", "value": "Item 1" },
//   {"name": "Item 2", "value": "Item 2" },
//   {"name": "Item 3", "value": "Item 3" }
//   ]'></axa-dropdown>`
//   )
//   .add(
//     'Dropdown w/ checkmark',
//     () => `<axa-dropdown defaulttitle="Please Select" data-test-id="dropdown-valid" checkmark
//     items='[
//     {"name": "Item 1", "value": "Item 1" },
//     {"name": "Item 2", "value": "Item 2" },
//     {"name": "Item 3", "value": "Item 3" }
//     ]'></axa-dropdown>
//     `
//   )
//   .add(
//     'Dropdown w/ error message',
//     () => `<axa-dropdown defaulttitle="Please Select" data-test-id="dropdown-error" invalid error="error"
//     items='[
//     {"name": "Item 1", "value": "Item 1" },
//     {"name": "Item 2", "value": "Item 2" },
//     {"name": "Item 3", "value": "Item 3" }
//     ]'></axa-dropdown>
//     `
//   )
//   .add(
//     'Dropdown inside form',
//     () => `<form id="dropdown-form" onsubmit="event.preventDefault();document.getElementById('form-data').open=true;document.getElementById('form-data-lang').textContent=(new FormData(this)).get('lang')">
//     <fieldset>
//     <legend>Language</legend>
//     <axa-dropdown data-test-id="dropdown-forms" name="lang" defaulttitle="Please select language" onchange="document.getElementById('dropdown-form').title += event.detail.value + ',' + event.detail.index + ' '"
//     items='[
//     {"name": "Deutsch", "value": "DE" },
//     {"name": "Français", "value": "FR" },
//     {"name": "Italiano", "value": "IT" }
//     ]'></axa-dropdown>
//     <axa-button type="submit">OK</axa-button>
//     <details id="form-data" style="display: inline-block;margin-left: 2rem">
//     <summary style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none">form content</summary>
//     <div style="display:table; padding: 5px 0">lang = <span id="form-data-lang"></span></div>
//     </details>
//     </fieldset>
//     </form>
//     `
//   );
