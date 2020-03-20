var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");
var test = document.querySelector(".didi");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  color1.style.background = "linear-gradient(to right, "+color1.value+"," +color2.value+")";
  color2.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")"
}



function Gradient() {
  test.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  color1.style.background = "linear-gradient(to right, "+color1.value+"," +color2.value+")";
  color2.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")"
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", Gradient);


color4.addEventListener("input", Gradient);
