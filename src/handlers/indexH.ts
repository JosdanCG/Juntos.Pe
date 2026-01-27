import { Request, Response } from "express";
import slug from 'slug'
import User from "../models/User";
import { hashPass } from "../utils/auth";
import { validationResult } from "express-validator";

export const createAcount = async (req: Request, res: Response) => {

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password} = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('El usuario con este email ya está registrado');
        return res.status(400).json({ msg: error.message });
    }
    return

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({ handle })
    if (handleExists) { 
        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({error: error.message})
    }
    
    const user = new User(req.body);
    user.password = await hashPass(password);
    user.handle = handle

    await user.save();
    res.status(201).send('Registro creado correctamente');
}