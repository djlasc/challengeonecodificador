
function processTextEncrypt() {
  const textInput = document.getElementById("text").value;
  if (validateInput(textInput)) {
    let result = "";
    result = encrypt(textInput);
    document.getElementById("salidaTexto").innerHTML = result;
    document.getElementById("salidaTexto").style.display = "block";
    document.querySelector(".mensaje").style.backgroundImage = "none";
  } 
}

function validateInput(text) {
  const caracterEspecial = /[^a-z]/g;
  if (caracterEspecial.test(text)) {
    alert("El texto no puede contener mayusculas o caracteres especiales");
    return false;
  } else {
      return true;
  }
}

function encrypt(text) {
  let encryptedText = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return encryptedText;
}

function processTextDecrypt() {
  const textInputL = document.getElementById("text").value;
  let resultL = "";
  resultL = decrypt(textInputL);
  document.getElementById("salidaTexto").innerHTML = resultL;
  document.getElementById("salidaTexto").style.display = "block";
    document.querySelector(".mensaje").style.backgroundImage = "none";
}
function decrypt(text) {
  let decryptedText = text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return decryptedText;
}

function copyMensaje() {
  var content = document.getElementById('salidaTexto');
  content.select();
  document.execCommand('copy');
  alert("¡Copiado!");
}

