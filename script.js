//your JS code here. If required.
const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit' ,function (event){
	event.preventDefault();
	let pass = document.getElementById('password').value.trim();
	let confirmPass = document.getElementById('confirm-password').value.trim();
	if(pass===confirmPass){
		alert("Sign up successful!");
	}
	else{
		alert("Passwords do not match");
	}
})
