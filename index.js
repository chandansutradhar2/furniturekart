const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/signup", (req, res) => {
	//accept email,password,firstName,lastName, mobileNo
	const email = req.body.email;
	const password = req.body.password;
	const firstName = req.body.firstName; // not a good practice , v1,v2,v3 doesnt provide context of the data
	//which it stores.

	if (email !== null || email !== undefined) {
	} else if (password !== null || password !== undefined) {
	}
});

function add(firstNoToAdd, secondNoToAdd) {
	let sumValue = firstNoToAdd + secondNoToAdd;
	return sumValue;
}

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
