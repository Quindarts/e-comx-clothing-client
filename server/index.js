require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { port, appConfig } = require("./config/keys");
const db = require('./config/index');
const CORSOPTIONS = {
    origin: appConfig.clientURL,
    optionsSuccessStatus: 200,
};
const app = express();
const CategorySchema = require("./models/category.js");
console.log("🚀 ~ file: index.js:12 ~ CategorySchema:", CategorySchema)


//

const Demo = require("./models/demo.js");
const     = require("./routes/api/product");
console.log("🚀 ~ file: index.js:18 ~ Demo:", Demo)




///

app.use(express.json());

app.use(cors(CORSOPTIONS));

db.connect();

app.use(router);
app.listen(port, () => {
    console.log("Listening to port:", port);
});
