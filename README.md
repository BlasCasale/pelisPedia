Explicación sobre el proyecto:

Durante este proyecto se crea un servidor web para una aplicación para usuarios donde puedan buscar sus películas favoritas, que estas películas seran buscadas en la API de omdbApi. Los usuarios registrados y creados seran almacenados en una base de datos de postgres que tiene un deploy hecho en RailWay, como también seran almacenados mediante el UserId y el imdbID (id de la película) en una tabla intermedia los favoritos de cada usuario, estos favoritos que tengan cada usuario también podran ser eliminados con los mismos datos que fueron ingresados, mediante una query previa.
Dentro de los routes hay middleware que son validadores de lo que deberia entrar a cada uno de los handlers, esto fue hecho de esta manera para evitar cargarle de la lógica de validación a los handlers y también por cuestiones de prolijidad del código.
También teniendo en cuenta que en las base de datos reales no se guarda información sensible de manera plana, hice una pequeña función que me hashee la contraseña que ingresa el usuario, previamente a ser guardada. Para cuando el usuario intenta acceder a su cuenta, esa contraseña ingresada nuevamente es hasheada y comparada con la que ya fue almacenada en la base de datos.

Tecnologías y dependencias utilizadas:

JavaScript
NodeJS

- Desarrollo:
1) Morgan.
2) nodemon.

- Producción:
1) Express.
2) Cors.
3) Dontenv.
4) Axios.
5) Sequelize.
6) Pg.
7) Pg-hstore.