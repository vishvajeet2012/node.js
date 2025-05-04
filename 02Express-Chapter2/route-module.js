const express = require('express');
const app = express();

// Dummy product data
const products = [
  { id: 1, label: 'product 1' },
  { id: 2, label: 'product 2' },
  { id: 3, label: 'product 3' },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to our home page');
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get single product by ID
app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const singleProduct = products.find(product => product.id === productId);

  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send('Product not found. Please try with a different ID.');
  }
});

// Start server
const port = 545;
app.listen(port, () => console.log(`Server is running on port ${port}`));
