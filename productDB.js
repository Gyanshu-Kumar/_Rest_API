require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        
        //It delete Previous Data and Add New Data...
        await Product.deleteMany();
        await product.create(ProductJson);
        console.log("sucess");

    } catch (error) {
        console.log(error);
    }
}

start();