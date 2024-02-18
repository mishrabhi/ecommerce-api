const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
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
    price: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
