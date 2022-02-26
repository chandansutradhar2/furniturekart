const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/login", (req, res) => {
	//todo connect to db and validate user
	const email = req.body.email;
	const password = req.body.password;
	if (!email || !password) {
		res.status(401).send({
			result: false,
			error: "unauthorized access",
		});
	} else {
		res.status(200).send({
			result: true,
			token: "8383j3e83-d38d3d3-d3d3d3d3-encuecneuc-d3e3d3d",
		});
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
