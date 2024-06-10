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
    deliveryDays: {
      days: {
        type: Number,
        enum: [4, 7, 10],
      },
      price: {
        type: Number,
      },
    },
    colors: [
      {
        type: String,
        // required: true,
      },
    ],
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    reviews: [
      {
        days: {
          type: Number,
          enum: [4, 7, 10],
        },
        price: {
          type: Number,
        },
      },
    ],
    deliveryFormat: [
      {
        format: {
          type: String,
          enum: ["png", "jpg", "jpeg"],
        },
        price: {
          type: Number,
        },
      },
    ],
    price: {
      type: Number,
      // required: true,
    },
    sold: {
      type: Number,
    },
    images: [
      {
        url: {
          type: String,
        },
        // size: {
        //   width: {
        //     type: Number,
        //     default: 210,
        //   },
        //   height: {
        //     type: Number,
        //     default: 210,
        //   },
        // },
      },
    ],
    deliveryOptions: [
      {
        type: String,
        enum: ["printed", "digital", "framed"],
      },
    ],
    productType: {
      type: Schema.Types.ObjectId,
      ref: "ProductType",
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
