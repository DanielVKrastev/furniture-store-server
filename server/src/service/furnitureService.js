import Furniture from "../models/Furniture.js";

export default {
    getAll() {
        return Furniture.find({});
    },
    getOne(furnitureId){
        return Furniture.findById(furnitureId);
    },
    create(furnitureData, userId){
        return Furniture.create({...furnitureData, creator: userId});
    },
    update(furnitureId, furnitureData){
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData)
    },
}