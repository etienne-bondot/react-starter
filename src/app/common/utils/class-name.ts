export const COMMON_CLASSES = {
  CHECKBOX: 'form-checkbox',
  CHECKBOX_TOGGLE: 'form-checkbox-toggle',
  ERROR_FIELD: 'form-error-field',
  ERROR_FORM: 'error-form',
  ERROR_MSG: 'form-error-msg',
  INPUT: 'form-input',
  LABEL: 'form-label dpb',
  RADIO: 'form-radio',
  RADIO_WITH_COLOR: 'with-color',
  RWD_COLUMN: 'column',
  RWD_ROW: 'form-rwd',

  // Primary is not necessary but needed for retrocompatibility
  SELECT: 'form-select primary',
  SELECT_NOT_CHOSEN: 'not-chosen',
  TEXTAREA: 'form-textarea'
};

export function format(...args: ({[className: string]: boolean} | string)[]): string {
  let classes = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes += ` ${arg}`;
    } else if (Array.isArray(arg)) {
      classes += ` ${this.classNames.apply(null, arg)}`;
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes += ` ${key}`;
        }
      }
    }
  }

  return classes.substr(1);
}
