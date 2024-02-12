const { Schema, model: Model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // to include createdAt and updatedAt fields automatically
  { timestamps: true }
);

const User = new Model("User", userSchema);

module.exports = User;
