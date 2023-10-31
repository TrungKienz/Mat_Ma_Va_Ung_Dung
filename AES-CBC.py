from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64
import time

def pad(data):
    block_size = 16
    padding = block_size - len(data) % block_size
    return data + bytes([padding] * padding)

def unpad(data):
    padding = data[-1]
    return data[:-padding]

def aes_cbc_encrypt(key, plaintext):
    iv = get_random_bytes(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = pad(plaintext)  # Apply PKCS#7 padding
    ciphertext = cipher.encrypt(plaintext)
    return base64.b64encode(iv + ciphertext)

def aes_cbc_decrypt(key, ciphertext):
    ciphertext = base64.b64decode(ciphertext)
    iv, ciphertext = ciphertext[:16], ciphertext[16:]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = cipher.decrypt(ciphertext)
    plaintext = unpad(plaintext)  # Remove PKCS#7 padding
    return plaintext

key = get_random_bytes(16)
plaintext = b'This is a secret message.'

# Do thoi gian danh cho ma hoa
start_time = time.time()
ciphertext = aes_cbc_encrypt(key, plaintext)
end_time = time.time()
print("Encryption Time:", (end_time - start_time)*1000 , "ms")

# Do thoi gian danh cho giai ma
start_time = time.time()
decrypted_text = aes_cbc_decrypt(key, ciphertext)
end_time = time.time()
print("Decryption Time:", (end_time - start_time)*1000 , "ms")

print("Ciphertext:", ciphertext)
print("Decrypted Text:", decrypted_text.decode('utf-8'))
