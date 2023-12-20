import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.ArticleModel,{
        foreignKey: 'authorId', 
        onDelete: 'CASCADE',  
        onUpdate: 'CASCADE'   
      });
    }
  }
  Author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};