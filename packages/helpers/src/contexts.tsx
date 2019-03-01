// Note: https://github.com/Microsoft/TypeScript/issues/28938 breaks typing hocs well
import * as React from 'react';

export type registerType = (payload: object) => void;
export type unregisterType = (name: string) => void;

export interface IAsFieldContext {
  registerWithField: registerType;
  unregisterFromField: unregisterType;
}

type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

const AsFieldContext = React.createContext<IAsFieldContext>({
  // @ts-ignore
  registerWithField: payload => {},
  // @ts-ignore
  unregisterFromField: name => {},
});
// @ts-ignore
AsFieldContext.Consumer.displayName = 'AsFieldConsumer';
// @ts-ignore
AsFieldContext.Provider.displayName = 'AsFieldProvider';

export function withAsField<P extends IAsFieldContext>(Component: React.ComponentType<P>) {
  // eslint-disable-next-line no-param-reassign
  Component.displayName = 'withAsField';
  return function AsFieldComponent(props: { [key: string]: any }) {
    return (
      <AsFieldContext.Consumer>{asFieldProps => <Component {...props} {...asFieldProps} />}</AsFieldContext.Consumer>
    );
  };
}

export interface IFormContext {
  registerWithForm: registerType;
  unregisterFromForm: unregisterType;
  formAutoComplete: boolean;
  isFormSubmitting: boolean;
  hasFormSubmitted: boolean;
  defaultFormValues: { [key: string]: any };
  formErrors: React.ReactNode[];
}

const FormContext = React.createContext<IFormContext>({
  // @ts-ignore
  registerWithForm: payload => {},
  // @ts-ignore
  unregisterFromForm: name => {},
  formAutoComplete: true,
  isFormSubmitting: false,
  hasFormSubmitted: false,
  defaultFormValues: {},
  formErrors: [],
});

// @ts-ignore
FormContext.Consumer.displayName = 'FormConsumer';
// @ts-ignore
FormContext.Provider.displayName = 'FormProvider';
// function hoc<P extends Props>(Component: ComponentType<P>): ComponentType<Omit<P, keyof Props>> {

export interface FormErrors {
  formErrors: React.ReactNode[];
}

export interface StringObject {
  [key: string]: any;
}

export function withFormErrors<P extends FormErrors>(
  Component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof FormErrors>> {
  // eslint-disable-next-line no-param-reassign
  Component.displayName = 'withFormErrors';
  // @todo so, P works here, but that means that we'd have to pass the formErrors object each time,
  // which COMPLETELY defeats the damn purpose.
  return function FormErrorComponent(props: P) {
    return (
      <FormContext.Consumer>
        {({ formErrors }) => <Component {...props} formErrors={formErrors} />}
      </FormContext.Consumer>
    );
  };
}

export function withForm<
  P extends {
    registerWithForm: registerType;
    unregisterFromForm: unregisterType;
    formAutoComplete: boolean;
    defaultFormValues: { [key: string]: any };
  }
>(Component: React.ComponentType<P>) {
  return function FormComponent(props: { [key: string]: any }) {
    // eslint-disable-next-line no-param-reassign
    Component.displayName = 'withForm';
    return (
      <FormContext.Consumer>
        {({ registerWithForm, unregisterFromForm, formAutoComplete, defaultFormValues }) => (
          <Component
            {...props}
            registerWithForm={registerWithForm}
            unregisterFromForm={unregisterFromForm}
            formAutoComplete={formAutoComplete}
            defaultFormValues={defaultFormValues}
          />
        )}
      </FormContext.Consumer>
    );
  };
}

export interface ISlideContext {
  registerWithSlide(payload: object): void;
  unregisterFromSlide(name: string): void;
}
const SlideContext = React.createContext<ISlideContext>({
  // @ts-ignore
  registerWithSlide: (payload: object) => {},
  // @ts-ignore
  unregisterFromSlide: (name: string) => {},
});

// @ts-ignore
SlideContext.Consumer.displayName = 'SlideConsumer';
// @ts-ignore
SlideContext.Provider.displayName = 'SlideProvider';

export function withSlide<P extends ISlideContext>(Component: React.ComponentType<P>) {
  // eslint-disable-next-line no-param-reassign
  Component.displayName = 'withSlide';
  return function SlideComponent(props: { [key: string]: any }) {
    return (
      <SlideContext.Consumer>{slideInterface => <Component {...props} {...slideInterface} />}</SlideContext.Consumer>
    );
  };
}

export function withFormSlideField<P extends ISlideContext & IFormContext & IAsFieldContext>(
  Component: React.ComponentType<P>,
) {
  // eslint-disable-next-line no-param-reassign
  Component.displayName = 'withFormSlideAsField';
  return function Wrapper(props: { [key: string]: any }) {
    return (
      <FormContext.Consumer>
        {formProps => (
          <SlideContext.Consumer>
            {slideProps => (
              <AsFieldContext.Consumer>
                {asFieldProps => <Component {...{ ...props, ...formProps, ...slideProps, ...asFieldProps }} />}
              </AsFieldContext.Consumer>
            )}
          </SlideContext.Consumer>
        )}
      </FormContext.Consumer>
    );
  };
}

export { AsFieldContext, SlideContext, FormContext };
