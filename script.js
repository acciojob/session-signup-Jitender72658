//your JS code here. If required.
const form = document.getElementById('signup-form');
const submitBtn = document.getElementById('submit');
form.addEventListener('submit' ,function (event){
	event.preventDefault();
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	let pass = document.getElementById('password').value.trim();
	let confirmPass = document.getElementById('confirm-password').value.trim();
	if(pass===confirmPass){
		sessionStorage.setItem('name', name);
		sessionStorage.setItem('email', email);
		sessionStorage.setItem('password', password);
		alert("Sign up successful!");
	}
	else{
		alert("Passwords do not match");
	}
})
