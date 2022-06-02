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

  item: [Item.schema]
});

const User= model('User', userSchema);
module.exports = User;