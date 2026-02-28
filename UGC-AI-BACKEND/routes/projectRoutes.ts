import express from 'express';
import { createProject, createVideo, deleteProject, getAllPublishProjects } from '../controllers/projectController.js';
import upolad from '../configs/multer.js';
import { protect } from '../middlewares/auth.js';

const projectRouter = express.Router()

projectRouter.post('/create', protect, upolad.array('images', 2), createProject)
projectRouter.post('/video', protect, createVideo)
projectRouter.get('/published', getAllPublishProjects)
projectRouter.delete('/:projectId', protect, deleteProject)

export default projectRouter