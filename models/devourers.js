module.exports = function(sequelize, DataTypes) {
  
  
  
    var Devourers = sequelize.define('devourers', {
      devoured: DataTypes.STRING,
      devourerId: DataTypes.INTEGER
    }, {
      classMethods: {
        associate: function(models) {
        }
      }
    });
    return Devourers;
  };
  
  