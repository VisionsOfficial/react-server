const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
	res.sendFile(__dirname, "public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server started");
});
