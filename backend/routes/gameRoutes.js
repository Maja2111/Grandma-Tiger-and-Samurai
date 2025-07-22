// Hier können Sie die Spiel-bezogenen API-Routen definieren
const express = require('express');
const router = express.Router();

// Beispielroute
router.get('/status', (req, res) => {
  res.json({ status: 'Game API is running' });
});

module.exports = router;
