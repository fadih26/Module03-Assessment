import express from 'express';
import {
    addArticle,
    getArticle,
    getAllArticle
  
} from '../controllers/ArticleController.js';
const router = express.Router();

router.post('/add', addArticle);
router.get('/:id', getArticle);
router.get('/all/articles', getAllArticle);

export default router