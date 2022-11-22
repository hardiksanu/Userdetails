// database name - olympics
// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment
const mongoose = require('mongoose');

//connection creation and creation of new db
mongoose.connect( "mongodb://0.0.0.0:27017/olympics", {   
          useNewUrlParser: true, //pass the object to avoid deprication warning.
          useUnifiedTopology: true 
}).then(() => {                                     // it returns promise.
          console.log("Connetion successful");
}).catch((err) => {                                     // if error in promise.
          console.log(err);
});