x=int(input('Enter value of altitude in feets:'))

if(x<1000):
    print("safe to land")
elif (1000<=x<=5000):
    print("come down to 1000 ft")
elif (x>5000):
    print("go around and try later")
else:
    pass
