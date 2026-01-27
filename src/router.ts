import { Router } from "express";
import { createAcount } from "./handlers/indexH";
import { body } from "express-validator";

const router = Router();

router.post('/auth/register',
    body('handle').notEmpty(),
    createAcount);

export default router;