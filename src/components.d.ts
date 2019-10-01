/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ChmodCheckbox {
    /**
    * The first name
    */
    'first': string;
    'isExecuteChecked': boolean;
    'isReadChecked': boolean;
    'isWriteChecked': boolean;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLChmodCheckboxElement extends Components.ChmodCheckbox, HTMLStencilElement {}
  var HTMLChmodCheckboxElement: {
    prototype: HTMLChmodCheckboxElement;
    new (): HTMLChmodCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    'chmod-checkbox': HTMLChmodCheckboxElement;
  }
}

declare namespace LocalJSX {
  interface ChmodCheckbox {
    /**
    * The first name
    */
    'first'?: string;
    'isExecuteChecked'?: boolean;
    'isReadChecked'?: boolean;
    'isWriteChecked'?: boolean;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'chmod-checkbox': ChmodCheckbox;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'chmod-checkbox': LocalJSX.ChmodCheckbox & JSXBase.HTMLAttributes<HTMLChmodCheckboxElement>;
    }
  }
}


