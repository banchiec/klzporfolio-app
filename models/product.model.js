const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    deliveryDays: [
      {
        days: {
          type: Number,
          enum: [4, 7, 10],
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
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    reviews: [
      {
        days: {
          type: Number,
          enum: [4, 7, 10],
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
          enum: ["png", "jpg", "jpeg"],
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
    productType: {
      type: Schema.Types.ObjectId,
      ref: "ProductType",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
