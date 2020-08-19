const mongoose = require("mongoose");
const {DB_URL} = process.env;

async function createConnection() {
  console.log("Creating Connection");

  const connection = await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // console.log(connection);

  if (connection) {
    console.log("Connected");
  }
}

module.exports = createConnection;
