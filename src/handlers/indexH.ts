import { Request, Response } from "express";
import User from "../models/User";
import { hashPass } from "../utils/auth";

export const createAcount = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('El usuario ya está registrado');
        return res.status(400).json({ msg: error.message });
    }
    
    const user = new User(req.body);
    user.password = await hashPass(password);
    await user.save();
    res.status(201).send('Registro creado correctamente');
}