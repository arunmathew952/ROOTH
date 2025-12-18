import { v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"

import mongoose from "mongoose"
//function for add product
const addProduct = async (req ,res)=>{
    try {
        const { name,description,category,price,sizes,bestseller} = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !==undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )

        console.log(name,description,category,price,sizes,bestseller);
        console.log(imagesUrl)

        const productData = {
            name,
            description,   
            category,
            price:Number(price),
            bestseller:bestseller==="true" ? true :false,
            sizes: JSON.parse(sizes),

            image: imagesUrl,
            date:Date.now()
        }
        console.log(productData);

        const product =  new productModel(productData);
        await product.save()

        res.json({success:true , message: "product Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}
//function for list products
const listProducts = async (req ,res)=>{

    try {
        const products= await productModel.find({})
        res.json({success:true, products})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }

}
//funtion for removing product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Product ID is required." });
        }

        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }

        await productModel.deleteOne({ _id: id });

        res.json({ success: true, message: "Product removed successfully." });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({ success: false, message: error.message || "Internal server error." });
    }
};
//function for single product info
const singleProduct = async (req, res) => {
    try {
      const { id } = req.body;
  
      if (!id) {
        return res.json({ success: false, message: "Product ID is required" });
      }
  
      const product = await productModel.findById(id);
  
      if (!product) {
        return res.json({ success: false, message: "Product not found" });
      }
  
      res.json({ success: true, product });
  
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
export {listProducts,addProduct,removeProduct,singleProduct}