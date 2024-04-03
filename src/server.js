const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

let startTime = new Date().toISOString();

app.get('/api/start-time', (req, res) => {
  res.json({ startTime });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
