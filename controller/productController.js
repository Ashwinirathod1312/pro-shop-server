import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModels.js";

const productController = asyncHandler(async (req, res) => {
    const response = await Product.find({});
    if (response) {
        res.send(response);
      } else {
        //  without errohandler
        // res.status(404).json({ message: "products not found" });
          //  with error handler
    res.status(404)
    throw new Error("products not found" )
      }
  })

  const getParticularProductController =  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
        //  without errohandler
    //   res.status(404).json({ message: "product not found" });

    //  with error handler
    res.status(404)
    throw new Error("product not found" )
    }
  })

  export {productController, getParticularProductController}