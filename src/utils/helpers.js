export function validateEmail(email) {
  //Regex allows correct format of email
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkMessage(input) {
  // Regex allows alphanumeric with spaces,tabs and linebreaks in between words
  const userMessage = /^\w+(\s\w*)*$/;
  if (input.match(userMessage)) {
    return true;
  }
  return false;
}
