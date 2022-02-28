function onBtnClicked() {
	var email = document.getElementById("email").value;
	if (email.length <= 0) {
		document.getElementById("email-error").innerHTML = "email cannot be blank";
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		document.getElementById("email-error").innerHTML =
			"please enter valid email";
	} else {
		document.getElementById("email-error").innerHTML = "";
	}
}
