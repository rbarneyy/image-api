const express = require('express');
const axios = require('axios');

const app = express();

app.get('/randomimg', async (req, res) => {
  try {
    // Fetch a random image from the internet
    const response = await axios.get('https://source.unsplash.com/random');
    
    // Set the response content type to image/jpeg
    res.set('Content-Type', 'image/jpeg');
    
    // Return the image data
    res.send(response.data);
  } catch (error) {
    // Log the error
    console.error(error);
    
    // Return an error response
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
