import { Router } from "express";

const furnitureController = Router();

// Get all
furnitureController.get('/data/catalog', (req, res) => {
    res.json([]);
});

// Get one
furnitureController.get('/data/catalog/:furnitureId', (req, res) => {
    res.json([]);
});

// Create
furnitureController.post('/data/catalog', (req, res) => {
    res.json([]);
});

// Update
furnitureController.put('/data/catalog/:furnitureId', (req, res) => {
    res.json([]);
});

// Delete
furnitureController.delete('/data/catalog/:furnitureId', (req, res) => {
    res.json([]);
});

export default furnitureController;