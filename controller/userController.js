const Product = require("../modal/productModal");

module.exports = {
  addProduct: async (req, res) => {
    try {
      const productExist = await Product.findOne({
        name: { $regex: new RegExp(`^${req.body.name}$`, "i") },
      });
      if (productExist) {
        return res.status(400).json({ message: "Product Exist" });
      } else {
        const newProduct = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
        };
        if (req.file) {
          newProduct.image = req.file.path;
        }
        const createProduct = await Product.create(newProduct);
        if (createProduct) {
          return res
            .status(200)
            .json({ message: "created", product: createProduct });
        }
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      if (products) {
        const uniqueCategories = new Set(
          products.map((product) => product.category.toLowerCase())
        );
        const categories = [...uniqueCategories].map((category) => ({
          name: category,
        }));
        return res.status(200).json({ message: "get", products, categories });
      } else {
        return res.status(400).json({ message: "not get" });
      }
    } catch (err) {
      return res.status(500).json({err:'something went wrong'});
    }
  },
  editProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findById({ _id: req.body.id });
      if (updatedProduct) {
        updatedProduct.name = req.body.name;
        updatedProduct.description = req.body.description;
        updatedProduct.price = req.body.price;
        updatedProduct.category = req.body.category;
        if (req.file) {
          updatedProduct.image = req.file.path;
        }
        const newProduct = await updatedProduct.save();
        return res
          .status(200)
          .json({ message: "updated", product: newProduct });
      } else {
        return res.status(400).json({ message: "not updated" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete({ _id: req.body._id });
      if (product) {
        return res.status(200).json({ message: "deleted", product });
      } else {
        return res.status(400).json({ message: "not deleted" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
