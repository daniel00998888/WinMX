nombres = []
while True:
    menu = int(input("\033[0m1. registrar nombre\n2. ver nombres\n3. borrar nombre de la base de datos\n4. Salir de la base de datos\nIntroduce una opcion: "))
    if menu == 1:
         nombre = input("\33[36mintroduce el nombre que quieres agregar a la base de datos: ")
         print(nombre, "\033[32mregistrado exitsamente en la base de datos")
         nombres.append(nombre)
    elif menu == 2:
         if len(nombres) == 0:
              print("\033[31mno hay nombres registrados")
         else:
              print("\033[33mnombres guardados: ")
              for indice, nombre in enumerate(nombres, 1):
                   print(indice, nombre)
    elif menu == 3:
         if len(nombres) == 0:
              print("\033[31mno hay nombres que eliminar")
         else:
              for indice, nombre in enumerate(nombres, 1):
                   print(indice, nombre)
                   
                   opcion = int(input("selecciona el nombre que desea elimiar de la base de datos: "))
                   nombres.pop(opcion -1)
    elif menu == 4:
         print("saliendo de la base de datos...")
         break
