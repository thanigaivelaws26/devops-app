const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Jenkins GUI CI/CD Working!');
});

app.listen(3000);
