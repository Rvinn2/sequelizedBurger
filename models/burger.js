module.exports = function(sequelize, DataTypes) {
  
  
  
  var Burger = sequelize.define('burger', {
    name_: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        burger.hasOne(models.devourers)
      }
    }
  });
  return Burger;
};

