const numberDisplays = document.querySelectorAll(".number_display");

function displayTime() {
  let date = new Date();

  let dateArr = [
    date.getDate().toString().padStart(2, "0"),
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ];

  numberDisplays.forEach((display, index) => {
    display.innerHTML = dateArr[index];
  });
}

setInterval(displayTime, 1000);
