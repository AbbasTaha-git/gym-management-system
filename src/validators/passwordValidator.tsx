export const passwordValidator = (
  password: string,
  existingPasswords: string[]
): string | null => {
  // Check if the password is exactly 12 characters long
  if (password.length !== 12) {
    return "Password should be exactly 12 characters long.";
  }
  if (existingPasswords.includes(password)) {
    return "Password already exists. Please choose a different one.";
  }

  // Check if the password contains at least one of the specified special characters
  const specialCharacters = [".", "!", "?", "@"];

  if (!specialCharacters.some((char) => password.includes(char))) {
    return "Password should contain at least one of the following special characters: . ? ! @";
  }

  // If all checks pass, the password is valid
  return null;
};
