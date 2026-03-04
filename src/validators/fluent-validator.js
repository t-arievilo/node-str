"use strict";
let errors = [];

function ValidatorContract() {
  errors = [];
}

ValidatorContract.prototype.isRequired = (value, message) => {
  if (!value || value.length <= 0) {
    errors.push({ message: message });
  }
};

ValidatorContract.prototype.hasMinLen = (value, min, message) => {
  if (!value || value.length < min) {
    errors.push({ message: message });
  }
};

ValidatorContract.prototype.hasMaxLen = (value, max, message) => {
  if (!value || value.length > max) {
    errors.push({ message: message });
  }
};

ValidatorContract.prototype.isFixedLen = (value, len, message) => {
  if (!value || value.length != len) {
    errors.push({ message: message });
  }
};

ValidatorContract.prototype.isEmail = (value, message) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(value)) {
    errors.push({ message: message });
  }
};

ValidatorContract.prototype.errors = () => {
  return errors;
};

ValidatorContract.prototype.clear = () => {
  errors = [];
};

ValidatorContract.prototype.isValid = () => {
  return errors.length == 0;
};

module.exports = ValidatorContract;
