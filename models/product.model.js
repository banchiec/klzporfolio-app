const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    deliverydays: [
      {
        days: {
          type: Number,
          enum: [4, 7, 10], // Enum validation
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    colors: [
      {
        type: String,
        required: true,
      },
    ],
    Category: {
      type: Schema.Types.ObjectId, // Use ObjectId for referencing
      ref: "Category", // Name of the model to reference
      required: true,
    },
    reviews: [
      {
        days: {
          type: Number,
          enum: [4, 7, 10], // Enum validation
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    deliveryFormat: [
      {
        format: {
          type: String,
          enum: ["png", "jpg", "jpeg"], // Enum validation
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        size: {
          width: {
            type: number,
            default: 210,
          },
          height: {
            type: number,
            default: 210,
          },
        },
      },
    ],
    deliveryOptions: [
      {
        type: {
          type: String,
          enum: ["printed", "digital", "framed"],
        },
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
