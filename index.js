const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/randomimg', async (req, res) => {
  try {
    const response = await axios.get('https://source.unsplash.com/random');
    const imageUrl = response.request.res.responseUrl;
    res.json({ url: imageUrl });
  } catch (error) {
    console.error('Error fetching random image:', error);
    res.status(500).json({ error: 'Failed to fetch random image' });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
