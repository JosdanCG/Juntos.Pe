import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});
router.post('/auth/register', (req, res) => {
    res.send('desde register');
  console.log('desde register');
  console.log(req.body);
  
    
});

export default router;