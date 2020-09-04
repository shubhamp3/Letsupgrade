a = [1, 1.2, "string",0]
a.append(1)
print(a)

b = a.copy()
print(b)

a.pop(1)
print(a)

a = ["s", "t", "r", "g"]
index = a.index("t")
print(index)

a.clear()
print(a)
