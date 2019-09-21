export const handleGenericError = (
  errorMessage: string,
  setFieldError: (fieldName: string, error: string) => void,
  fieldName?: string,
): void => {
  switch (errorMessage) {
    case 'confict':
      setFieldError(fieldName || '_default', 'This email already exist');
      break;
    case 'invalid_email':
      setFieldError(fieldName || '_default', 'Please enter a valid email address');
      break;
    case 'min_length':
      setFieldError(fieldName || '_default', 'Too short');
      break;
    case 'required':
      setFieldError(fieldName || '_default', 'This field is required');
      break;
    case 'signin_failure':
      setFieldError(fieldName || '_default', "Email and password don't match");
      break;
    default:
      setFieldError('_default', 'An unknown error occured');
  }
};
