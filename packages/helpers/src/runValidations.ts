import isFunction from 'lodash/isFunction';
import emptyArray from './emptyArray';

export type ValidateFn = (value: any) => string | false;

export default function runValidations(validate: ValidateFn | ValidateFn[], value: any): (string | false)[] {
  if (Array.isArray(validate)) {
    return validate.map((fn: ValidateFn) => (!isFunction(fn) ? false : fn(value)));
  }

  if (isFunction(validate)) {
    const errors = validate(value);
    return Array.isArray(errors) ? errors : [errors];
  }

  return emptyArray;
}