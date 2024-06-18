const express = require("express");
const path = require("path");

const app = express();

// app.enable("trust proxy");
// app.use((req, res, next) => {
// 	req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
// });

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server started");
});
