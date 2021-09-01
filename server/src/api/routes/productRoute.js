import express from "express";
import { addProduct,getAllProduct,getProduct,deleteProduct} from "../../controllers/productController.js";

const router = express.Router();

router.post('/product/add',addProduct);
router.get('/product:id',getProduct);
router.get('/product/getAll',getAllProduct);
router.delete('/product/:id',deleteProduct);


export default router;