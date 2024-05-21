var myColorInput = document.getElementById("color");

var myColorHex = myColorInput.value;

document.body.style.backgroundColor = myColorHex;

myColorInput.addEventListener("input", function () {
    document.body.style.backgroundColor = myColorInput.value;
});
