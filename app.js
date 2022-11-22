const express = require("express");
require("../src/db/conn");     // use this required to conn.js in main app
const MensRanking = require("../src/models/mens");
const app = express();
const router = require("./routes/men");
const cors = require("cors");

app.use(cors({origin: 'http://localhost:3000'}));
const port = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // to use json data in express app. through use of postman and get in this app, we needs to get permission from express app.
app.use(router); 
// start the server
app.listen(port, () => {
          console.log(`connection started successfully on port ${port}`);
});

