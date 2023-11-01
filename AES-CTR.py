from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util import Counter
import binascii
import time
import os

# Khóa bí mật, bạn cần lưu ý rằng khóa này phải được bảo mật cẩn thận
secret_key = get_random_bytes(16)
def int_of_string(s):
    return int(binascii.hexlify(s), 16)

def encrypt(plain_text, key):
    iv = os.urandom(16)
    ctr = Counter.new(128, initial_value=int_of_string(iv))
    aes = AES.new(key, AES.MODE_CTR, counter=ctr)
    return iv + aes.encrypt(plain_text)

def decrypt(cipher_text, key):
    iv = cipher_text[:16]
    ctr = Counter.new(128, initial_value=int_of_string(iv))
    aes = AES.new(key, AES.MODE_CTR, counter=ctr)
    return aes.decrypt(cipher_text[16:])
# Ví dụ mã hóa và giải mã
plain_text = "This is a secret message"
plain_text = plain_text.encode('utf-8')

start_time = time.time()
cipher_text = encrypt(plain_text, secret_key)
end_time = time.time()
print("Encryption Time:", (end_time - start_time)*1000 , "ms")

# Do thoi gian danh cho giai ma
start_time = time.time()
decrypted_text = decrypt(cipher_text, secret_key)
end_time = time.time()
print("Decryption Time:", (end_time - start_time)*1000 , "ms")

# Chuyển dữ liệu giải mã thành chuỗi
decrypted_text = decrypted_text.decode('utf-8')

print("Ciphertext:", cipher_text)
print("Decrypted Text:", decrypted_text)
