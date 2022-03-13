const express = require("express");
const cors = require("cors");

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

const app = express();

var corsOptions = {
    origin: ["http://localhost:8081", "http://localhost:4200"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

require("./routes/url.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});