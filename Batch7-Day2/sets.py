thisset = {1, 1.2, "string", 0}
print(thisset)

b = thisset.copy()
print(b)

c = thisset.issubset(thisset)
print(c)

d = thisset.issuperset(thisset)
print(d)

e = thisset.union({1, 2, 3})
print(e)

thisset.clear()
print(thisset)