/* eslint-disable no-console, no-alert */
import React, { Component } from 'react';

import { Field, Radios, Submit, Reset } from '@swan-form/field';
import { Form } from '@swan-form/form';
import { hot } from 'react-hot-loader';

import './RegularForm.css';

const minLenTen = value => (value.length > 9 ? false : 'Min len 10');
const alphaNumeric = value => (/^[a-zA-Z0-9]{1,}$/.test(value) ? false : 'Alpha Numeric');
// const threeDigits = value => (/^[\d]{3}$/.test(value) ? false : 'Must pass three digits');

const tenAndAlpha = [minLenTen, alphaNumeric];
// const onSubmit = values => console.log(values);
const onSubmit = values =>
  new Promise(res => {
    setTimeout(() => {
      console.log(values);
      res(true);
    }, 3000);
  });

const wrapperStyle = { margin: '5rem', border: '1px solid steelblue', padding: '0 5rem 5rem' };
const fieldSetStyling = `
.remove-fieldset-styling {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}
.remove-fieldset-styling legend {
  margin: 0;
  padding: 0;
}`.trim();

const onButtonClick = () => {
  alert('I was clicked');
};

class RegularForm extends Component {
  constructor(props) {
    super(props);
    console.log(
      'You should see a console.error message 👇 about an invalid type. It is a test to make sure that invalid types throw an error message. The field will instead be replaced with an HTML comment.',
    );
  }

  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <h1>Form Component</h1>
          <Form onSubmit={onSubmit} name="testform">
            <div>
              <p>A regular text field with a few validations and autofocus.</p>

              <Field
                type="text"
                name="minTenField"
                validate={tenAndAlpha}
                label="This is a label"
                validateOnBlur
                validateOnChange
                placeholder="test"
                defaultValue="testing12345"
                required
                autoFocus
              />
            </div>

            <div>
              <Field type="button" name="alertButton" onClick={onButtonClick}>
                Click me!
              </Field>
            </div>

            <div>
              <Field type="checkbox" label="Checkbox field" name="checkboxaaa" checked />
            </div>

            <div>
              <p>You can style inputs with CSS.</p>

              <Field
                type="text"
                label="A Fancy Field"
                name="styledFancy"
                pattern="[\d]{3}"
                required
                placeholder="Type '323' in this box"
                className="fancy-field"
                defaultValue="Type '323' in this box"
              />
            </div>

            <div>
              <p>
                {' '}
                This uses the <code>Radios</code> component. Radio buttons are different than the rest of the standard
                form fields because they are, inherently, a set. Since they all share a sort of &quot;state value&quot;
                (as opposed to the value attribute), the value of the group is set to the currently selected radio
                button&apos;s value, so they get a different approach. The buttons are rendered in a{' '}
                <code>fieldset</code> wrapper, and the overall label is set as a <code>legend</code> tag.
              </p>
              <Radios
                name="radioset"
                label="Radio Set"
                options={[{ label: 'first', value: 'first' }, { label: 'second', value: 'second' }]}
                defaultValue="second"
              />
            </div>

            <div>
              <p>If you do not want the native fieldset styling, then you can remove it</p>
              <Radios
                name="radioset2"
                className="remove-fieldset-styling"
                label="Radio Set"
                options={[{ label: 'first', value: 'first' }, { label: 'second', value: 'second' }]}
                defaultValue="first"
              />
              <pre>{fieldSetStyling}</pre>
            </div>

            <div>
              {/* eslint-disable no-useless-escape */}
              <p>
                This text field must be three digits because it uses the native pattern attribute for validation that
                browsers implement. So <code>{'pattern="[d]{3}"'}</code> gets sent to the <code>input</code> field.
              </p>
              {/* eslint-disable no-useless-escape */}
              <Field
                type="text"
                name="withPattern"
                // validate={threeDigits}
                pattern="[\d]{3}"
                validateOnBlur
                placeholder="test2"
                defaultValue={323}
                label="field with pattern"
              />
            </div>

            <div>
              <Field type="number" label="Number Field" name="number-field" defaultValue="4" />
            </div>
            <div>
              <Field name="date" type="date" label="Date Field" placeholder="MM/YYYY" />
            </div>
            <div>
              <Field name="button" type="button" label="Button" onClick={() => alert('Hi')} defaultValue="What?" />
            </div>
            <div>
              The color picker doesn't work quite right
              <Field name="color" type="color" label="Native Color Picker: " defaultValue="#ff0000" />
            </div>
            <div>
              <Field name="datetime-local" type="datetime-local" label="DateTime Local" />
            </div>
            <div>
              <Field name="email" type="email" />
            </div>
            <div>
              <Field name="file" type="file" accept="dmg" />
            </div>
            <div>
              <Field name="month" type="month" defaultValue="2018-01" label="month" />
            </div>
            <div>
              <Field name="notapassword" type="password" />
            </div>
            <div>
              <Field name="range" type="range" min={0} max={200} step={5} label="Range" />
            </div>
            <div>
              <Field name="checkbox" type="checkbox" checked />
            </div>
            <div>
              <Field name="invalid" type="invalid" />
            </div>
            <div>
              <Field name="tel" type="tel" label="tel" />
            </div>
            <div>
              <Field name="time" type="time" label="time" />
            </div>
            <div>
              <Field name="url" type="url" label="url" placeholder="https://www.example.com" size={30} />
              <pre>{'<Field name="url" type="url" label="url" placeholder="https://www.example.com" size={30} />'}</pre>
            </div>

            <div>
              <Field name="week" type="week" label="week" />
            </div>
            <br />
            <br />
            <div>
              <Field
                type="textarea"
                name="freeform"
                label="Please Explain"
                defaultValue="test"
                rows={5}
                cols={40}
                required
              />
            </div>
            <div>
              <Field
                name="multiSelectField"
                type="select"
                multiple
                options={[
                  'one',
                  'two',
                  'three',
                  { label: 'four', value: 'four' },
                  { label: 'five (disabled)', value: 'five', disabled: true },
                  { OptGroup: ['abc', 'def', 'hij'] },
                ]}
              />
            </div>
            <div>
              <Field
                name="selectField"
                type="select"
                options={[
                  'one',
                  'two',
                  'three',
                  { label: 'four', value: 'four' },
                  { label: 'five (disabled)', value: 'five', disabled: true },
                  { OptGroup: ['abc', 'def', 'hij'] },
                ]}
              />
            </div>
            <br />
            <br />
            <hr />
            <br />

            <Submit />
            <span>&nbsp;</span>
            <Reset />
          </Form>
        </div>
      </div>
    );
  }
}

export default hot(module)(RegularForm);
