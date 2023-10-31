from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64
import time

def aes_gcm_encrypt(key, plaintext):
    iv = get_random_bytes(16)  # Use a 16-byte IV for AES-GCM
    cipher = AES.new(key, AES.MODE_GCM, nonce=iv)
    ciphertext, tag = cipher.encrypt_and_digest(plaintext)
    return base64.b64encode(iv + ciphertext + tag)

def aes_gcm_decrypt(key, ciphertext):
    ciphertext = base64.b64decode(ciphertext)
    iv, ciphertext, tag = ciphertext[:16], ciphertext[16:-16], ciphertext[-16:]
    cipher = AES.new(key, AES.MODE_GCM, nonce=iv)
    plaintext = cipher.decrypt_and_verify(ciphertext, tag)
    return plaintext

key = get_random_bytes(16)
plaintext = b'This is a secret message.'

start_time = time.time()
ciphertext = aes_gcm_encrypt(key, plaintext)
end_time = time.time()
print("Encryption Time: ", (end_time - start_time)*1000, " ms")

start_time = time.time()
decrypted_text = aes_gcm_decrypt(key, ciphertext)
end_time = time.time()
print("Decryption Time: ", (end_time - start_time)*1000, " ms")

print("Ciphertext:", ciphertext)
print("Decrypted Text:", decrypted_text.decode('utf-8'))
