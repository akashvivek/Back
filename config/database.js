require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Databe COnnected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    }); //as we  have managed catch block by writing unhandled rejection code

};

module.exports = connectDatabase;
