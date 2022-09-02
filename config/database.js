const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Databe COnnected with server ${data.connection.host}`);
    })
    // .catch((err) => {
    //   console.log(err);
    // }); //as we  have managed catch block by writing unhandled rejection code

};

module.exports = connectDatabase;
