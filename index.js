const express = require('express');
const app = express();

class ImageGenerator {
  generateImage(prompt) {
    return new Promise((resolve, reject) => {
      // Generate the image based on the prompt
      // Use any code or algorithms you like here
      // For simplicity, let's just draw some random shapes on a canvas

      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 200;
      const context = canvas.getContext('2d');

      // Drawing random shapes
      context.fillStyle = 'red';
      context.fillRect(10, 10, 100, 100);

      context.fillStyle = 'blue';
      context.fillRect(150, 50, 200, 100);

      // Export the image as a data URL
      const dataURL = canvas.toDataURL();
      
      resolve(dataURL);
    });
  }
}

// Create an instance of the ImageGenerator
const imageGenerator = new ImageGenerator();

// Define the /image endpoint
app.get('/image', (req, res) => {
  const prompt = req.query.prompt || 'A colorful abstract painting';

  imageGenerator.generateImage(prompt)
    .then(dataURL => {
      res.json({ image: dataURL });
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to generate image' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
