import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const createdUser = await userService.register(userData);

    //TODO: login
    res.json({});
    
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const loginUser = await userService.login(email, password);

    res.json(loginUser);
    
});

export default userController;