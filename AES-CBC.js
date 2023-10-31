const CryptoJS = require("crypto-js");

function aesCbcEncrypt(key, iv, plaintext) {
  const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

function aesCbcDecrypt(key, iv, ciphertext) {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

const key = CryptoJS.enc.Hex.parse("00112233445566778899aabbccddeeff"); // 256-bit key
const iv = CryptoJS.enc.Hex.parse("aabbccddeeff00112233445566778899"); // 128-bit IV
const plaintext = "This is a secret message";

console.time("Encryption Time");
const ciphertext = aesCbcEncrypt(key, iv, plaintext);
console.timeEnd("Encryption Time");

console.time("Decryption Time");
const decryptedText = aesCbcDecrypt(key, iv, ciphertext);
console.timeEnd("Decryption Time");

console.log("Ciphertext:", ciphertext);
console.log("Decrypted Text:", decryptedText);
