thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
print(thisdict)

thisdict.pop("brand")
print(thisdict)


thisdict.update({"brand": "unknown"})
print(thisdict)

thisdict.clear()
print(thisdict)

x = ("key1", "key2", "key3")
y = (0, 1, 2)

thisdict = dict.fromkeys(x, y)
print(thisdict)
