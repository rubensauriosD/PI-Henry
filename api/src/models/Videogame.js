const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaDeLanzamiento: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
