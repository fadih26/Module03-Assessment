import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import Author from './author.js'
import Article from './article.js'

dotenv.config()
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_TYPE,
        port: process.env.DB_PORT
    }
);

const AuthorModel = Author(sequelize, Sequelize);
const ArticleModel = Article(sequelize, Sequelize);


const db = {
    sequelize,
    Sequelize,
    AuthorModel,
    ArticleModel
  
  };

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
})
  export default db;