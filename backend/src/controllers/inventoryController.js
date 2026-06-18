const Inventory = require("../models/Inventory");

// GET all inventory
const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE inventory
const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE inventory
const updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(inventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE inventory
const deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);

    res.json({
      message: "Inventory deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};