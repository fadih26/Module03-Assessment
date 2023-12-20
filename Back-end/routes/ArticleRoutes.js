import express from 'express';
import {
    addArticle,
    getArticle
  
} from '../controllers/ArticleController.js';
const router = express.Router();

router.post('/add', addArticle);
router.get('/:id', getArticle);

export default router