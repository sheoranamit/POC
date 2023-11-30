const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;


app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Fakestore API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching product with ID ${productId} from Fakestore API:`, error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
