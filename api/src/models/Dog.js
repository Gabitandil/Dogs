const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    years:{
      type: DataTypes.INTEGER
    },
    createdInDB:{
      type:DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: true,
     },
     image:{
       type:DataTypes.TEXT,
     }
  });
};
