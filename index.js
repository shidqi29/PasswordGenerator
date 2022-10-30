let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "1234567890";

  const data = lowerAlphabet + upperAlphabet + numeric;

  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  savedPassword = password.value
  saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Your Password is: ' + savedPassword))
  saveButton.setAttribute('download', 'MyPasswordGenerator.txt')
};
