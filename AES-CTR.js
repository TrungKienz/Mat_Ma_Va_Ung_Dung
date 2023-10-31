const crypto = require('crypto');
const { performance } = require('perf_hooks');

// Tạo một key và IV (vector khởi đầu)
const key = crypto.randomBytes(16); // Kích thước key là 16 bytes
const iv = crypto.randomBytes(16);  // Kích thước IV cũng là 16 bytes

// Mã hóa thông điệp
function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv('aes-128-ctr', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Giải mã thông điệp
function decrypt(encrypted, key, iv) {
  const decipher = crypto.createDecipheriv('aes-128-ctr', key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const plaintext = 'This is a secret message';

// Đo thời gian mã hóa
const startTimeEncrypt = performance.now();
const encryptedText = encrypt(plaintext, key, iv);
const endTimeEncrypt = performance.now();

console.log('Encryption Time:', endTimeEncrypt - startTimeEncrypt, 'ms');

// Đo thời gian giải mã
const startTimeDecrypt = performance.now();
const decryptedText = decrypt(encryptedText, key, iv);
const endTimeDecrypt = performance.now();

console.log('Decryption Time:', endTimeDecrypt - startTimeDecrypt, 'ms');

console.log('Encrypted Text:', encryptedText);
console.log('Decrypted Text:', decryptedText);
