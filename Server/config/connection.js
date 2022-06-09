const mongoose = require("mongoose");

MONGODB_URI='mongodb+srv://bsnyd008:FXD9ig2pqS7rrgAr@cachemarket.snwkygt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CacheMarketDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
