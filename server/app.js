const express = require('express');
const bodyParser = require('body-parser')

const db = require("./common/db");

const app = express();
app.use(bodyParser());
app.use(express.static('public'))


const servicesRouter = express.Router();
app.use("/api", servicesRouter);


require("./users/routes")(servicesRouter);

db.connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})
