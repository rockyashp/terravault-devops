const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    mineral: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "Low Stock", "Out of Stock"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);