const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    mobile: Number,
    address: String,
    Avatar: String,
    dob: {
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

//Schema level middlewares:

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    this.password = this.encryptPassword(this.password);
    next();
  } else {
    this.password = this.encryptPassword(this.password);
    next();
  }
});

//Schema level methods

userSchema.methods = {
  encryptPassword: function (plainPass) {
    return bcrypt.hashSync(plainPass, 10);
  },
  authenticate: function (plainPass) {
    return bcrypt.compare(plainPass, this.password);
  },
};

module.exports = mongoose.model("users", userSchema);
