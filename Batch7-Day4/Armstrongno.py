for i in range(1042000,702648265):
    temp=i
    summation=0
    while temp>0:
        digit = temp%10
        # print(digit)
        summation= summation + (digit**3)
        temp=temp//10

        # print(temp)
        break
    if (i==summation):
        print("First armstrang number is" + i)
        break
