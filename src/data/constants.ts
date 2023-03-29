export const patterns = {
  username: /[0-9a-zA-Z]{4,20}$/,
  email: /^([\w.]{6,16})+@([\w-]+\.)+[\w-]{2,4}$/,
  continents: /^((?!default).)*$/,
  dateOfBirth: /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
  opinion: /([0-9a-zA-Z.,'`!?:;-]\s*){20,300}$/,
};

export const errorMessages = {
  empty: "* This field must not be empty",
  short: "* Value of this field too short",
  long: "* Value of this field too long",
  wrong: "* Wrong value",
  notImage: "* Please, add image",
};
