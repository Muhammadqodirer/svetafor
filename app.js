const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

let step = 0;

function updateLights() {
  red.classList.remove("bg-red-500");
  yellow.classList.remove("bg-yellow-400");
  green.classList.remove("bg-green-500");

  red.classList.add("bg-gray-700");
  yellow.classList.add("bg-gray-700");
  green.classList.add("bg-gray-700");

  if (step === 0) {
    red.classList.add("bg-gray-700", "bg-red-500");
  } else if (step === 1) {
    yellow.classList.add("bg-gray-700", "bg-yellow-400");
  } else if (step === 2) {
    green.classList.add("bg-gray-700", "bg-green-500");
  }

  step = (step + 1) % 3;
}

updateLights();
setInterval(updateLights, 2000);