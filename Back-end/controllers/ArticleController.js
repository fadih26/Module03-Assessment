import { json } from 'sequelize';
import db from '../models/index.js';

const { ArticleModel,AuthorModel } = db;

export const addArticle = async (req, res) => {
    const { imageURL, title, body, category, authorId } = req.body;
    try {

        const newArticle = await ArticleModel.create({
            imageURL,
            title,
            body,
            category,
            authorId

        });

        

        res.status(200).json({ "message": "Article added successfully", "data": newArticle });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getArticle = async (req, res) => {
    const { id } = req.params;
    try {

        const Article = await ArticleModel.findByPk(id,{include: [AuthorModel]});



        res.status(200).json({ "data":Article });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}