""""
def romano_decimal():
    valores={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000,}
    numero_romano=input("ingresa el numero romano: ")
    decimal=0
    for i in range(len(numero_romano)):
        if i>0 and valores[numero_romano[i]]>valores[numero_romano[i-1]]:
            decimal+=valores[numero_romano[i]]-2*valores[numero_romano[i-1]]
        else:
            decimal+=valores[numero_romano[i]]
    return decimal

resultado=romano_decimal()
print("el numero decimal equivalente es: ",resultado)"""

a=int(input("ingrese el numero 1: "))
b=int(input("ingrese el numero 2: "))

c=a+b

print("el resltado es: ",c)