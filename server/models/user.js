/* const { sequelize } = require('sequelize');


const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    }
  });
 
     User.associate = models => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
  }; 
 
  return User;
};
 
export default user; */