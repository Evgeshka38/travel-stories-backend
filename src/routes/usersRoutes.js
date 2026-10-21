import { Router } from "express";
import { getTravellerProfile } from '../controllers/userController.js';


const router = Router();

router.get('/users/:id', getTravellerProfile);

export default router;
