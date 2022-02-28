function onBtnClicked() {
	//capture user email and validation to see if its not blank, and if it has value then

	var email = document.getElementById("email").value;
	if (email.length <= 0) {
		document.getElementById("email-error").innerHTML = "email cannot be blank";
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		//checking the value is a valid email format using js regular expression
		document.getElementById("email-error").innerHTML =
			"please enter valid email";
	} else {
		document.getElementById("email-error").innerHTML = "";
	}
}

class Customer {
	firstName;
	lastName;
}

class Employee {
	firstName;
	lastName;
}

let emp = new Employee();
let cust = new Customer();
cust.fName;

class Car {
	//good naming variables should provide context
	//should provide clarity of stroage or meaning
	//should be conscise
	brandName;
	engine_capacity;
	pax_no_of_passanger;
	fuel_type;
	model;
}

//caller using your class car
const carObj = new Car();
carObj.brandName = "Tiago";
carObj.engine_capacity = 1200;

car_brandName = "tigor";

console.log(carObj);

function divAppend() {
	let products = ["samsung x10", "iphone X", "Oneplus Nord", "galaxy fold"];
	products.forEach((ele) => {
		ele = ele + "price";
	});
	console.log(products);
}

function appendPriceToProduct() {
	//creating a product collection
	let products = ["samsung x10", "iphone X", "Oneplus Nord", "galaxy fold"];

	//looping through product collection and adding price to each element of product
	products.forEach((product, index) => {
		products[index] = products[index] + "price";
	});

	let name = "chandan";
	let anotherName = "some name";
	products.forEach((ele) => {});
	//printing products
	console.log(products);
}
appendPriceToProduct();
