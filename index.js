import mongoose from "mongoose";
import { Express } from "express";
import bodyParser from "body-parser";

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce_API');
const { schema } = mongoose;

const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const EcommerceSchema = new mongoose.Schema({
    name: String, 
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    image: String
});

const Product = mongoose.model('Product', EcommerceSchema);