const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, '../public');

app.use(express.static(static_path));

// routing
app.get('/', (req, res) => {
  res.send('Hello this is Weather Application');
});

app.get('/about', (req, res) => {
  res.send('Welcome to about us Page');
});

app.get('/weather', (req, res) => {
  res.send('Welcome to weather Page');
});

app.get('*', (req, res) => {
  res.send('404 Error, Page Not Found');
});

app.listen(port, () => {
  console.log('listening in port 8000');
});
