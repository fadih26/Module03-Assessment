import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsTo(models.AuthorModel);
    }
  }
  Article.init({
    imageURL: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.INTEGER // Foreign key
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};