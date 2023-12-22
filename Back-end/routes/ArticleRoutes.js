import express from 'express';
import {
    addArticle,
    getArticle,
    getAllArticle
  
} from '../controllers/ArticleController.js';
import { authenticate,checkRole } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/add', addArticle);
router.get('/:id', getArticle);
router.get('/all/articles', authenticate,checkRole(['chef','admin']),getAllArticle);

export default router