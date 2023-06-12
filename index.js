const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/randomimg', async (req, res) => {
  try {
    const response = await fetch('https://source.unsplash.com/random');
    if (!response.ok) {
      throw new Error('Failed to fetch random image');
    }
    const imageUrl = response.url;
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error fetching random image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
