@echo off

:: Lấy thời gian bắt đầu
setlocal enabledelayedexpansion
set start_time=!time!

:: Chạy chương trình Python và lưu kết quả vào tệp output.txt
python AES-CBC.py > python_CBC-mode_output.txt

:: Lấy thời gian kết thúc và tính thời gian thực hiện
set end_time=!time!
endlocal

:: In thời gian thực hiện
echo Python Execution Time: %start_time% - %end_time%

:: Đợi một chút trước khi thực hiện chương trình JavaScript
timeout /t 2

:: Lấy thời gian bắt đầu
setlocal enabledelayedexpansion
set start_time=!time!

:: Chạy chương trình JavaScript và lưu kết quả vào tệp output.txt
node AES-CBC.js > javaScript_CBC-mode_output.txt

:: Lấy thời gian kết thúc và tính thời gian thực hiện
set end_time=!time!
endlocal

:: In thời gian thực hiện
echo JavaScript Execution Time: %start_time% - %end_time%

:: Tính toán hiệu suất nếu cần

:: Đợi một chút trước khi đóng cửa sổ
timeout /t 5
