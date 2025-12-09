const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
