import Product from "../models/products.model.js";

// Add a new product
export const addProduct = async (req, res) => {
    try {
        const { name, image, price, description, stock } = req.body;

        // Check if required fields are present in the request body
        if (!name || !image || !price || !description || !stock) {
            return res.status(400).json({ msg: 'Please include all required fields' });
        }

        // Create a new product instance
        const newProduct = new Product({ name, image, price, description, stock});

        // Save the new product to the database
        await newProduct.save();

        // Return a success response with the newly created product data
        res.status(201).json({ success: true, message: "Product added successfully", data: newProduct });
    } catch (error) {
        console.error("Error adding product:", error.message);

        // Check if the error is a validation error
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: 'Validation error', details: validationErrors });
        }

        // Return an internal server error response for other types of errors
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        // Check if any products are found
        if (!products || products.length === 0) {
            return res.status(404).json({ success: false, message: "No products found" });
        }

        // Return a success response with the product data
        res.status(200).json({ data: products });
    } catch (error) {
        // Return an internal server error response
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Get a single product by ID
export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        // Check if the product is not found
        if (!product) {
            return res.status(404).json({ success: false, message: "No product found" });
        }

        // Return a success response with the product data
        res.status(200).json({ data: product });
    } catch (error) {
        // Return an internal server error response
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

// Delete a single product by ID
export const deleteSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const delProduct = await Product.findByIdAndDelete(id);

        // Check if no product is found to delete
        if (!delProduct) {
            return res.status(404).json({ success: false, message: "No product found to delete" });
        }

        // Return a success response with the deleted product data
        res.status(200).json({ success: true, message: "Product deleted successfully", deletedItem: delProduct });
    } catch (error) {
        // Return an internal server error response
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

// Update a product by ID
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, productData, { new: true });

        // Check if no product is found to update
        if (!updateProduct) {
            return res.status(404).json({ success: false, message: "No product found to update" });
        }

        // Return a success response with the updated product data
        res.status(200).json({ success: true, message: "Product updated successfully", updatedItem: updateProduct });
    } catch (error) {
        // Return an internal server error response
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}
