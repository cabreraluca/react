/// Aplicación creada con React.js. Se hizo uso de librerías como MaterialUI.

Funcionamiento: 

Para probar la aplicación se tendrá que agregar algún articulo de su preferencia al carrito, luego ir al carrito y finalizar la compra rellenando los datos requeridos. 
Al finalizar, se enviaran tus datos a Firebase (Metodo POST) y será devuelto su ID de compra (Metodo GET).


Rutas: 
'/': Donde inicia la aplicación, se traen los productos desde firebase sin filtrar.
'/category/remeras': Se traen los productos con categoría 'remeras'.
'/category/buzos': Se traen los productos con categoría 'buzos'.
'/cart': Carrito de compras, se encuentran los productos que fueron agregados al carrito.
'/checkout': Formulario para ingresar los datos y finalizar la compra.
'/admin': Se pueden ver las órdenes realizadas por todos los clientes traídas desde Firebase.

