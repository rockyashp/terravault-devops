const Inventory = require("../models/Inventory");

// Get all inventory items
const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();

    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getInventory,
};