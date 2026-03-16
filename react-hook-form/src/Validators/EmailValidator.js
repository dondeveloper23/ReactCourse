const wrongEmails = ["admin@gmail.com", "test@gmail.com"]

export const EmailValidator = {
  required: "E-mail is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
    message: "Enter valid e-mail (name@gmail.com)",
  },
  minLength: {
    value: 10,
    message: "Enter at least 10 characters for the e-mail"
  },
  validate: {
    wrongEmailsTest: value => wrongEmails.includes(value) || "This e-mail is not allowed"
  }
};
