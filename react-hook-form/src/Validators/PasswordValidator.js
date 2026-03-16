const wrongPassword = ["admin123", "dule123"]

export const PasswordValidator = {
  required: true,
  validate: {
    trim: (value) => value.trim().length > 0,
    capital: value => /[A-Z]/.test(value) || "You must have 1 capital letter",
    symbol: value => /[!@#$%^%]/.test(value) || "You must include one symbol",
    wrongPasswordTest: value => !wrongPassword.includes(value) || "This Password is not allowed"
  },
  minLength: {
    value:5,
    message: "Password must be at least 5 charactes long"
  },
  maxLength: {
    value: 16,
    message: "Password is too long!"
  }
};
