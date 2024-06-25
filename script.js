//your JS code here. If required.
const selector = document.getElementById("colorSelect");
const btn = document.querySelector('input');

btn.addEventListener("click", function(){
	console.log("Hello");
	const options = document.querySelector('option');
	selector.removeChild(options[0])
});



