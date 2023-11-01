# Mat_Ma_Va_Ung_Dung
- Bài tập kiểm thử hiệu suất của mã hóa AES-CBC mode và AES-CTR mode giữa 2 thư viện pycrypto của Python và thư viện crypto-js của JavaScript

# JavaScript CBC mode 
- Cài đặt thư viện crypto-js của javascript bằng câu lệnh: npm install crypto-js

- Sau đó cấu hình các thông số cho mã hóa AES bao gồm:
+ iv: iv
+ mode: CBC
+ padding: Pkcs7

- Tạo key và tạo iv
+ key: một chuỗi ký tự dài 256 bit
+ iv: một chuỗi ký tự dài 128 bit

- Cuối cùng chạy chương trình js với câu lệnh: node AES-CBC.js
- Chú ý: Yêu cầu đã cài môi trường node và đã cài phiên bản mới nhất của npm 

# Python CBC mode 
- Cài đặt thư viện pycrypto của python bằng câu lệnh: pip install pycryptodome
 
- Cài đặt hàm pad và hàm unpad với cơ chế hoạt động như sau:
+ pad(data): Hàm này nhận dữ liệu bạn muốn thực hiện padding và tính toán số byte cần thêm vào để đạt đến biên giới block tiếp theo (thông thường là 16 byte cho AES). Sau đó, nó thêm vào cuối dữ liệu số byte đó, mỗi byte chứa giá trị của padding cần thêm.

+ unpad(data): Hàm này loại bỏ padding theo chuẩn PKCS#7 khỏi dữ liệu. Nó đọc byte cuối cùng của dữ liệu, đại diện cho số lượng padding được thêm vào, sau đó loại bỏ số byte đó từ cuối dữ liệu để lấy được dữ liệu gốc.

- Sau đó cấu hình các thông số cho mã hóa AES bao gồm:
+ iv: get_random_bytes(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte
+ mode: CBC
+ padding: Pkcs7 (gọi lại hàm pad đã định nghĩa ở trên)
- Tạo key
+ key: get_random_bytes(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte
- Cuối cùng chạy chương trình python với câu lệnh: python AES-CBC.py

# JavaScript CTR mode 
- Cài đặt thư viện crypto-js của javascript bằng câu lệnh: npm install crypto-js

- Sau đó cấu hình các thông số cho mã hóa AES bao gồm:
+ iv: crypto.randomBytes(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte
+ mode: CTR

- Tạo key
+ key: crypto.randomBytes(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte

- Cuối cùng chạy chương trình js với câu lệnh: node AES-CTR.js
- Chú ý: Yêu cầu đã cài môi trường node và đã cài phiên bản mới nhất của npm 

# Python CTR mode 
- Cài đặt thư viện pycrypto của python bằng câu lệnh: pip install pycryptodome

- Sau đó cấu hình các thông số cho mã hóa AES bao gồm:
+ iv: os.urandom(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte
+ mode: CTR

- Tạo key
+ key: get_random_bytes(16) một chuỗi ký tự được lấy bằng hàm random với độ dài là 16 byte
- Cuối cùng chạy chương trình python với câu lệnh: python AES-CTR.py


# So sánh hiệu suất giữa 2 thư viện của js và python 
- Chạy file performent_CBC-mode_test.bat để ghi dữ liệu ra file python_CBC-mode_output.txt và javaScript_CBC-mode_output.txt cùng lúc tính toán thời gian chạy của 2 chương trình js và python.

- Chạy file performent_CTR-mode_test.bat để ghi dữ liệu ra file python_CTR-mode_output.txt và javaScript_CTR-mode_output.txt cùng lúc tính toán thời gian chạy của 2 chương trình js và python.

- Chạy file calculate_performent.js để so sánh hiệu suất giữa 2 chương trình