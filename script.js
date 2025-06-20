const passwordBox = document.getElementById("password");
const length = document.getElementById("length");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  let characters = "";
  if (upper.checked) characters += upperChars;
  if (lower.checked) characters += lowerChars;
  if (number.checked) characters += numberChars;
  if (symbol.checked) characters += symbolChars;

  if (characters.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  let pwd = "";
  for (let i = 0; i < length.value; i++) {
    let rand = Math.floor(Math.random() * characters.length);
    pwd += characters[rand];
  }

  passwordBox.value = pwd;
}

document.getElementById("generate").addEventListener("click", generatePassword);

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
