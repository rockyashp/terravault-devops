const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    inventory: "12,450 Tons",
    shipments: 148,
    activeMines: 24,
    alerts: 3,
  });
});

module.exports = router;