const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes placeholder
app.get('/', (req, res) => {
  res.send('Grandma, Tiger and Samurai Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
