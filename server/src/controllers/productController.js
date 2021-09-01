import {scrape} from "../scrape.js"
import Product from "../models/product.js"

export const addProduct = async (req, res) => {
    try {
        const product = await scrape(req.body.url);
        const createdProduct = await Product.create(product);
        res.status(201).json(createdProduct);
    } catch (err) {
        console.error(err);
        if(err)
        res.status(401).send(err);
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (err) {
        console.error(err);
        res.status(401).send({
            error: err
        });
    }
}
export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (err) {

        console.error(err);
        res.status(401).send(err);
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        res.status(202).json(products);

    } catch (err) {

        console.error(err);
        res.status(204).send(err);
    }
}