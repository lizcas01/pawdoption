const db = require('../config/connection');
const { Dog } = require('../models');
const dogData = require('./dogSeeds.json');

db.once('open', async () => {
  try {
    await Dog.deleteMany({});
    const dog = await Dog.insertMany(dogData);

    console.log('All dogs seeded!');
    console.log(dog);
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});