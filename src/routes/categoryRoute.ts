import express from 'express';
import { createCategory, getCategories, getCategoryById } from '../controllers/CategoryController';



const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.get("/:id", getCategoryById);
export default router;