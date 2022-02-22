const mongoose = require('mongoose');
const {config}=require('../config/secret')

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://localhost:27017/feb22');  
  await mongoose.connect( `mongodb+srv://${config.userMongo}:${config.passMongo}@cluster0.do2lk.mongodb.net/feb22`);

  console.log("mongo connect feb22 atlas...")
}