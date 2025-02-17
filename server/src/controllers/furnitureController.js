import { Router } from "express";
import furnitureService from "../service/furnitureService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

// Get all
furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures);
});

// Get one
furnitureController.get('/:furnitureId', async (req, res) => {
    const furniture = await furnitureService.getOne(req.params.furnitureId);
    res.json(furniture);
});

// Create
furnitureController.post('/', isAuth, async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id;

    const newFurniture = await furnitureService.create(furnitureData, userId);
    res.json(newFurniture);
});

// Update
furnitureController.put('/:furnitureId', (req, res) => {
    res.json([]);
});

// Delete
furnitureController.delete('/:furnitureId', (req, res) => {
    res.json([]);
});

export default furnitureController;