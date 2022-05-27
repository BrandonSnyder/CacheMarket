const db = require('../config/connection');
const { Item } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Item.deleteMany({});

  const technologies = await Item.insertMany(techData);

  console.log('Items seeded!');
  process.exit(0);
});
