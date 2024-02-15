const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
      unique: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: String,
    imageURL: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    type: {
      type: String,
      required: true,
      enum: ["Clothing", "Electronics", "Footwear"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
