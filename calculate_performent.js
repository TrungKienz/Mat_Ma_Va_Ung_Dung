const fs = require('fs').promises;

// Tên tệp văn bản bạn muốn đọc
const fileCBCModeJs = 'javaScript_CBC-mode_output.txt';
const fileCBCModePython = 'python_CBC-mode_output.txt';
const fileCTRModeJs = 'javaScript_CTR-mode_output.txt';
const fileCTRModePython = 'python_CTR-mode_output.txt';

const calculatePerformance = async (fileNameJS, filenamePython, beginText, endText) => {
    try {
      const dataJS = await fs.readFile(fileNameJS, 'utf8');
      const dataPython = await fs.readFile(filenamePython, 'utf8');
  
      const regexJS = new RegExp(`${beginText}: ([0-9.]+)${endText}`);
      const regexPython = new RegExp(`${beginText}: ([0-9.]+)${endText}`);
  
      const encryptionTimeJS = dataJS.match(regexJS);
      const encryptionTimePython = dataPython.match(regexPython);
  
      if (encryptionTimeJS && encryptionTimePython) {
        const jsTime = parseFloat(encryptionTimeJS[1]);
        const pythonTime = parseFloat(encryptionTimePython[1]);
  
        return jsTime/pythonTime ;
      } else {
        console.log('Không tìm thấy thời gian mã hóa.');
        return null;
      }
    } catch (err) {
      console.error('Lỗi khi đọc tệp:', err);
      return null;
    }
  };

const performanCBCModeEncryption = calculatePerformance(fileCBCModeJs, fileCBCModePython, 'Encryption Time', 'ms');
performanCBCModeEncryption.then((result) => {
  if (result !== null) {
    console.log(`Thư viện của python nhanh hơn gấp ${result.toFixed(2)} lần so với JS trong việc mã hóa bằng AES-CBC mode`);
  }
});

const performanCBCModeDecryption = calculatePerformance(fileCBCModeJs, fileCBCModePython, 'Decryption Time', 'ms');
performanCBCModeDecryption.then((result) => {
  if (result !== null) {
    console.log(`Thư viện của python nhanh hơn gấp ${result.toFixed(2)} lần so với JS trong việc giải mã bằng AES-CBC mode`);
  }
});

const performanCTRModeEncryption = calculatePerformance(fileCTRModeJs, fileCTRModePython, 'Encryption Time', 'ms');
performanCTRModeEncryption.then((result) => {
  if (result !== null) {
    console.log(`Thư viện của python nhanh hơn gấp ${result.toFixed(2)} lần so với JS trong việc mã hóa bằng AES-CTR mode`);
  }
});

const performanCTRModeDecryption = calculatePerformance(fileCTRModeJs, fileCTRModePython, 'Decryption Time', 'ms');
performanCTRModeDecryption.then((result) => {
  if (result !== null) {
    console.log(`Thư viện của python nhanh hơn gấp ${result.toFixed(2)} lần so với JS trong việc giải mã bằng AES-CTR mode`);
  }
});