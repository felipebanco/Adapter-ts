# **Patrones de Diseño TypeScript**.
# **Integrantes:**  
* Felipe Banco
* Andres Murgo
* Emanuel Cortinez.
- - -

## **Adapter**

***Definición:***

Es un patron de diseño estructural que intenta resolver la problemática de que hayan clases o interfaces incompatibles por medio del uso de un objeto adaptador y herencia.  

***Caso Elegido:***

Un usuario necesita enviar un email con un título y cuerpo del mensaje, pero que se envié desde diferentes proveedores de correo. Sin embargo existen clases que presentan métodos diferentes para llevar a acabo la misma acción.

***Solución:***

1. Crear una interfaz que contenga el método solicitado por el usuario

2. Las clases compatibles deben implementar la interfaz

3. Para las clases incompatibles se debe crear una clase que implemente un objeto adaptador en el constructor y que a su vez esté vinculado a la interfaz. Una vez hecho esto se puede trabajar con el mismo método.

4. Exportar a los proveedores en una clase 

5. Luego se crea un objeto de tipo array que itera a todos los proveedores en un bucle.

6. Por último el array es asisgando a una constante, se crea una nueva instancia para cada proveedor, se invoca el método pasando los datos (título-cuerpo del mensaje), sin tener que preocuparse por cómo cada proveedor lleva a cabo dicha función.  


