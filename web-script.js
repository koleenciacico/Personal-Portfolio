//Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(savedTheme + "-mode");
  updateToggleIcon(savedTheme);
}

function updateToggleIcon(theme) {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "light" ? "🌙" : "☀️";
  }
}

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-mode");
  const newTheme = isLight ? "dark" : "light";

  document.body.classList.toggle("light-mode", newTheme === "light");
  document.body.classList.toggle("dark-mode", newTheme === "dark");

  localStorage.setItem("theme", newTheme);
  updateToggleIcon(newTheme);
});

document.addEventListener("DOMContentLoaded", initTheme);

//This is where we create the interactivity for our little color game

//1. select all the htmk elements so that we can later manipulate them
const body = document.querySelector("body");
const colorInput = document.getElementById("color-picker");
const colorDiv = document.querySelector(".color-div");
const hiddenText = document.querySelector(".color-div p");
const resetBtn = document.querySelector(".color-div button");
const playBtn = document.getElementById("play-game");

//2. create the functions
function playGame() {
  // this function enables the play of the game by showing the color selector input
  colorDiv.style.display = "block";
  playBtn.style.display = "none";
}

function changeColor() {
  // take the users selected color then change the bg of the website
  const selectedColor = colorInput.value;
  body.style.background = selectedColor;
  resetBtn.style.display = "block";
  hiddenText.style.display = "block";
  colorInput.style.display = "none";
}
function resetColor() {
  // Reset to current theme's background color
  const isDarkMode = document.body.classList.contains("dark-mode");
  const bgColor = isDarkMode ? "#2d1f0f" : "#faf6f1";
  body.style.background = bgColor;

  colorInput.style.display = "block";
  playBtn.style.display = "block";
  resetBtn.style.display = "none";
  hiddenText.style.display = "none";
  colorDiv.style.display = "none";
}

// is to assign the functions to the button by adding them function call to the actual elements (done above in the html code)
