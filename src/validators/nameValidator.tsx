// nameValidator.js

const nameValidationPattern = /^[A-Za-z\s]*$/;

const validateName = (name: string) => {
  if (nameValidationPattern.test(name) && name.length <= 20) {
    return true;
  }
  return false;
};
export default validateName;
