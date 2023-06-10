const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.enable("trust proxy");
app.use((req, res, next) => {
	req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
	res.sendFile(__dirname, "public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server started");
});
