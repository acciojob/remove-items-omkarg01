//your JS code here. If required.
const selector = document.getElementById("colorSelect");
const btn = document.querySelector('input');

btn.addEventListener("click", function () {
    console.log("Hello");
    let selectedOption = selector.options[selector.selectedIndex];
    selector.removeChild(selectedOption);
});