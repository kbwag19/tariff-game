// server.js
require('dotenv').config(); // Load environment variables from the .env file

// For debugging: print the GitHub token to verify it's loaded (remove/comment out in production)
console.log("GitHub Token:", process.env.GITHUB_ACCESS_TOKEN);

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// A sample API endpoint
app.get('/api/tariffs', (req, res) => {
  res.json({
    message: 'This is protected API data',
    tokenPresent: Boolean(process.env.GITHUB_ACCESS_TOKEN)
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});