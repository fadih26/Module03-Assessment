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


if(Article){
        res.status(200).json({ "data":Article });}
        else{
            res.status(404).json({ "message":"Article not found" });   
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getAllArticle = async (req, res) => {

    try {

        const Articles = await ArticleModel.findAll({include: [AuthorModel]});



        res.status(200).json({ "data":Articles });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}