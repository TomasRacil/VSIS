import bcrypt

passwd = b's$cret12'

salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(passwd, salt)

print(salt)
print(len(hashed))
print(hashed)

if bcrypt.checkpw(b's$cret12', hashed):
    print("match")
else:
    print("does not match")


if bcrypt.checkpw(b'heslo', hashed):
    print("match")
else:
    print("does not match")