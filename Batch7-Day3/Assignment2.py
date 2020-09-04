# for x in range(200):
#     a=x
#     for y in range(1,(a-1)):
#         c=x%y
#         if(c==0):
#             break
#         else:
#             print(x)

for num in range(200):
    # print(num)  
    if num > 1:  
       for i in range(2,(num-1)):  
           if (num % i) == 0:  
               break  
       else:  
           print(num)  