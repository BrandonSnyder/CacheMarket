const db = require('../config/connection');
const { Item, User } = require('../models');


const userData = require('./userSeedData.json')
const techData = require('./seedData.json');

db.once('open', async () => {
  await Item.deleteMany({});
  await User.deleteMany({})

  const technologies = await Item.insertMany(techData);
  
  const users = await User.insertMany(userData);

  console.log('Items seeded!');
  process.exit(0);
});
