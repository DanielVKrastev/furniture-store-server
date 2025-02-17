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
furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureData = req.body;
    const updatedFurniture = await furnitureService.update(furnitureId, furnitureData);
    res.json(updatedFurniture);
});

// Delete
furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    await furnitureService.delete(furnitureId);
    res.json({ ok: true });
});

export default furnitureController;