function CheckEmailValidity(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function CheckPasswordValidity(password) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

export { CheckEmailValidity, CheckPasswordValidity };
