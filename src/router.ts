import { Router } from "express";
import { createAcount } from "./handlers/indexH";

const router = Router();

router.post('/auth/register', createAcount);

export default router;