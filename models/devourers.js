module.exports = function(sequelize, DataTypes) {
  
  
  
    var devourers = sequelize.define('devourers', {
      devourer_name: DataTypes.STRING,
      devourerId: DataTypes.INTEGER
    }, {
      classMethods: {
        associate: function(models) {
        }
      }
    });
    return devourers;
  };
  
  