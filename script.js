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
		let data = {
			    'name': name,
			    'email': email,
			    'password': password
			};
		localStorage.setItem('data', JSON.stringify(data));
		alert("Sign up successful!");
	}
	else{
		alert("Passwords do not match");
	}
})
