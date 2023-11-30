const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path =  require ('path');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
dotenv.config();

const dirname = path.resolve();

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


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;
