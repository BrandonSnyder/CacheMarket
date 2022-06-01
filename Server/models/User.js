const { Schema, model } = require("mongoose");
const Item = require("./Item");

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
  },

  item: [Item.schema]
});

const User= model('User', userSchema);
module.exports = User;