const numberDisplays = document.querySelectorAll(".number_display");

let target = new Date().getTime() + 1209600000;

function displayTime() {
  let now = new Date().getTime();

  let distance = target - now;

  let displayArr = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    Math.floor((distance % (1000 * 60)) / 1000),
  ];

  numberDisplays.forEach((display, index) => {
    display.innerHTML = displayArr[index];
  });
}

setInterval(displayTime, 1000);
