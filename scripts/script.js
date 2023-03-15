const numberDisplays = document.querySelectorAll(".number_display");

let target = new Date().getTime() + 1209600000; //the target day is 14 days later than the current time when the user opens the page; it is the current time + 14 days (in milliseconds)

function displayTime() {
  let now = new Date().getTime(); //getting the current time

  let distance = target - now; //distance between now and the target date

  let displayArr = [
    Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0"),
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0"),
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0"),
    Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0"),
  ]; // calculating the values to be displayed; Math.floor() returns the largest integer that is less than or equal to the number provided

  numberDisplays.forEach((display, index) => {
    display.innerHTML = displayArr[index];
  }); // displaying the numbers on the clock
}

setInterval(displayTime, 1000); //the function is being called every 1000 milliseconds (1 second), creating the ticking clock appearance

const socialIcons = document.querySelectorAll(".social_icon");

const socialLinks = ["facebook", "pinterest", "instagram"];

socialIcons.forEach((icon, index) => {
  icon.addEventListener("mouseenter", () => {
    icon.src = `images/icon-${socialLinks[index]}-red.svg`;
  });
  icon.addEventListener("mouseout", () => {
    icon.src = `images/icon-${socialLinks[index]}.svg`;
  });
}); // adding the hover events on the social media icons
