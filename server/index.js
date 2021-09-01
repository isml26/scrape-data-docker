import express from "express";
import {connectDB} from "./src/loaders/mongoose.js";
import productRoutes from "./src/api/routes/productRoute.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use(cors());

app.use('/',productRoutes);

const PORT = process.env.PORT || 5000 ;

await connectDB();

// app.get('/',(req,res)=>{
//   res.send("Hello ")
// })

app.listen(PORT, ()=>{
    console.log(`App started on ${PORT}`);
});

