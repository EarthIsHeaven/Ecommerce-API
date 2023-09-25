import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce_API');
const { schema } = mongoose;

const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let lastId=1;

const EcommerceSchema = new mongoose.Schema({
    id: Number,
    name: String, 
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    image: String
});

const Product = mongoose.model('Product', EcommerceSchema);

const item1 = new Product({
    id: 1,
    name: "Iphone 15",
    description: "Newly released iphone 15",
    price: 25000,
    quantity: 1,
    category: "mobile",
    image: "url"
  })
  
  app.get("/posts", (req, res) => {
  
    async function read() {
      const foundItems = await Product.find({});
      if (foundItems.length == 0) {
        item1.save();
        res.json(item1);
      }
      else {
        res.json(foundItems);
      }
    }

    read();
  })

  app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    async function find() {
      const foundById = await Product.findOne({ id: id });
      if (!foundById) {
        return res.status(404)
          .json({ message: "Post not found" });
      }
      else {
        res.json(foundById);
      }
    }

    find();
  })

  app.post("/posts", (req, res) => {
    const newId = lastId += 1;
  
    const anotherItem = new Product({
        id: newId,
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        quantity : req.body.quantity,
        category : req.body.category,
        image : req.body.image,
    })
    lastId = newId;
    anotherItem.save();
    res.json(anotherItem).status(201);
  })

  app.patch("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    async function find() {
      await Product.findOneAndUpdate({ id: id },
        {
          id: id,
          name: req.body.name,
          description : req.body.description,
          price : req.body.price,
          quantity : req.body.quantity,
          category : req.body.category,
          image : req.body.image,
        })
    }
    find();
    res.json(id);
  })

  app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    async function del() {
      await Product.deleteOne({ id: id });
    }
    del();
    res.json(id);
  })

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})