/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ChmodCheckbox {
    'base': string;
    /**
    * The first button text
    */
    'first': string;
    /**
    * Stores the checkbox value when last one is changed
    */
    'isExecuteChecked': boolean;
    /**
    * Stores the checkbox value when first one is changed
    */
    'isReadChecked': boolean;
    /**
    * Stores the checkbox value when middle one is changed
    */
    'isWriteChecked': boolean;
    /**
    * The last button text
    */
    'last': string;
    /**
    * The middle button text
    */
    'middle': string;
    /**
    * Main mutable permission value depends on the selection of checkboxes
    */
    'permission': number;
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
    'base'?: string;
    /**
    * The first button text
    */
    'first'?: string;
    /**
    * Stores the checkbox value when last one is changed
    */
    'isExecuteChecked'?: boolean;
    /**
    * Stores the checkbox value when first one is changed
    */
    'isReadChecked'?: boolean;
    /**
    * Stores the checkbox value when middle one is changed
    */
    'isWriteChecked'?: boolean;
    /**
    * The last button text
    */
    'last'?: string;
    /**
    * The middle button text
    */
    'middle'?: string;
    /**
    * Main mutable permission value depends on the selection of checkboxes
    */
    'permission'?: number;
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


