const db = require('../config/connection');
const { Dogs } = require('../models');

const dogData = require('./dogData.json');

db.once('open', async () => {
  await Dogs.deleteMany({});

  const dogData = await Dogs.insertMany(dogData);

  console.log('Dogs seeded!');
  process.exit(0);
});
