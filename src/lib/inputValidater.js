export const checkAtLeastLength = (expression, length) => {
  return expression && expression.trim().length >= length;
};

export const checkIsFilled = expression => {
  return expression && expression.length > 0;
};

export const checkEmailPattern = mail => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(mail);
};

export const checkIsTrue = expression => expression;

export const checkPhoneNumberPattern = phone => {
  const regex = /((09|03|07|08|05)+(\d{8})\b)/;
  return regex.test(phone);
};

export const recheckSameString = (expression, check) => {
  return expression === check;
};
