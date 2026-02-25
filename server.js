const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// API se data aur images fetch karna
app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // Har product mein 'image' ka field pehle se hota hai is API mein
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Data fetch karne mein masla hai" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));