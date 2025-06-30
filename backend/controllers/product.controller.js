import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch(error) {
        console.error("Error while retrieving products: ", error.message);
        return res.status(500).json({success: false, message: "Server error"});
    }
}

export const createProduct = async(req, res) => {
    const product = req.body;
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Provide all fields"});
    }

    try {
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }
    catch(error) {
        console.error("Error while creating product: ", error.message);
        return res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(200).json({success: true, data: updatedProduct});
    }
    catch(error) {
        console.error("Error while updating a product: ", error.message);
        return res.status(500).json({success: false, message: "Server error"});
    }
}

export const deleteProduct = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({success: false, message: "Invalid product id"});

    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "Product deleted"});
    }
    catch(error) {
        console.error("Error while deleting a product: ", error.message);
        return res.status(500).json({success: false, message: "Server error"});
    }
}