const { Schema, model } = require("mongoose");
const Item = require("./Item");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  },
  city:{
    type: String,
  },
  state:{
    type: String,
    required: true,
  },
  phone:{
    type: String,
  },
  likedItem: [Item.schema],
  cart:[Item.schema]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User= model('User', userSchema);

module.exports = User;