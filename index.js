const mongoose = require('mongoose');
const Product = require('./product');  // Import the Product model

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        // Create a new product
        const newProduct = new Product({
            title: 'Laptop',
            price: 1200,
            category: 'Electronics',
            inStock: true
        });

        // Save the product to the database
        newProduct.save()
            .then(() => {
                console.log('Product saved');
            })
            .catch(err => console.error(err));
    })
    .catch(err => console.error('Error connecting to MongoDB', err));
