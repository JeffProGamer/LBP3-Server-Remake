const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example route (replace with LBP3 server logic later)
app.get('/', (req, res) => {
  res.send('LBP3 Server is running!');
});

// Example API endpoint
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Render requires PORT from env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`LBP3 Server listening on port ${PORT}`);
});

