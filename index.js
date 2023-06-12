const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/randomimg', async (req, res) => {
  try {
    await installPackage('axios'); // Install axios dynamically
    const axios = require('axios'); // Import axios

    const response = await axios.get('https://source.unsplash.com/random');
    const imageUrl = response.request.res.responseUrl;
    res.json({ url: imageUrl });
  } catch (error) {
    console.error('Error fetching random image:', error);
    res.status(500).json({ error: 'Failed to fetch random image' });
  }
});

function installPackage(packageName) {
  return new Promise((resolve, reject) => {
    exec(`npm install ${packageName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing ${packageName}: ${error.message}`);
        reject(error);
      } else {
        console.log(`Installed ${packageName}`);
        resolve();
      }
    });
  });
}

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
