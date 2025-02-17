import Furniture from "../models/Furniture.js";

export default {
    getAll() {
        return Furniture.find({});
    },
    getOne(furnitureId){
        return Furniture.findById(furnitureId);
    },
    create(furnitureData, userId){
        return Furniture.create({...furnitureData, _ownerId: userId});
    },
    update(furnitureId, furnitureData){
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData)
    },
    delete(furnitureId){
        return Furniture.findByIdAndDelete(furnitureId);
    }
}