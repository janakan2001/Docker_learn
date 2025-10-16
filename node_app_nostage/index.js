const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', async (req, res) => {
  try {
    const entry = `Visited /contact at ${new Date().toISOString()} from ${req.ip}\n`;
    await fs.appendFile('contacts.log', entry, 'utf8');
  } catch (err) {
    console.error('Failed to append contact log:', err);
  }
  res.send('Contact us here!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});