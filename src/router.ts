import { Router } from "express";
import User from "./models/User";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/auth/register', async (req, res) => {
    res.send('desde register');
  console.log('desde register');
  console.log(req.body);
  
  await User.create(req.body);
});

export default router;