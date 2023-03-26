import { IFeedbackErrors, IFeedbackFields } from "../../interfaces";

const messages = {
  empty: "* This field must not be empty",
  short: "* Value of this field too short",
  long: "* Value of this field too long",
  wrong: "* Wrong value",
  notImage: "* Please, add image",
};

const validateField = (field: string | null, pattern: RegExp): string | null => {
  if (field !== null) {
    const regExp = new RegExp(pattern);
    const status = regExp.test(field);
    return status ? null : messages.wrong;
  }

  return messages.wrong;
};

const validateFieldWithSize = (
  field: string | null,
  pattern: RegExp,
  min: number,
  max: number
): string | null => {
  if (field !== null) {
    const regExp = new RegExp(pattern);
    const status = regExp.test(field);
    let message = null;

    if (!status) {
      switch (true) {
        case field.length === 0:
          message = messages.empty;
          break;
        case field.length < min:
          message = messages.short;
          break;
        case field.length > max:
          message = messages.long;
          break;
        default:
          message = messages.wrong;
      }
    }
    return message;
  }

  return messages.empty;
};

const validate = (inputs: IFeedbackFields): IFeedbackErrors => {
  const patterns: { [key: string]: RegExp } = {
    username: /[0-9a-zA-Z]{4,20}$/,
    email: /^([\w.]{6,16})+@([\w-]+\.)+[\w-]{2,4}$/,
    // dateOfBirth: /(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/,
    dateOfBirth: /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
    opinion: /([0-9a-zA-Z.,'`!?:;-]\s*){20,300}$/,
  };

  return {
    username: validateFieldWithSize(inputs.username, patterns.username, 4, 20),
    continents: inputs.continents === "default" ? messages.wrong : null,
    email: validateFieldWithSize(inputs.email, patterns.email, 10, 40),
    dateOfBirth: validateField(inputs.dateOfBirth, patterns.dateOfBirth),
    picture: inputs.picture !== null ? null : messages.notImage,
    rating: null,
    opinion: validateFieldWithSize(inputs.opinion, patterns.opinion, 20, 300),
    isConfirm: inputs.isConfirm ? null : messages.wrong,
  };
};

export default validate;
