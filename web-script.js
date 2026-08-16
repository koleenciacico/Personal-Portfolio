// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
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

// ============================================
// MOBILE NAV MENU
// ============================================
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

function closeNav() {
  siteNav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function openNav() {
  siteNav?.classList.add("open");
  navToggle?.setAttribute("aria-expanded", "true");
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.contains("open");
  isOpen ? closeNav() : openNav();
});

// Close the menu after tapping a nav link
siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

// Close the menu when tapping outside of it
document.addEventListener("click", (e) => {
  if (!siteNav?.classList.contains("open")) return;
  const clickedInsideNav = siteNav.contains(e.target);
  const clickedToggle = navToggle?.contains(e.target);
  if (!clickedInsideNav && !clickedToggle) closeNav();
});

// Close the menu if the viewport is resized back to desktop width
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeNav();
});

// ============================================
// COLOR GAME
// ============================================
const body = document.querySelector("body");
const colorInput = document.getElementById("color-picker");
const colorDiv = document.querySelector(".color-div");
const hiddenText = document.querySelector(".color-div p");
const resetBtn = document.querySelector(".color-div button");
const playBtn = document.getElementById("play-game");

function playGame() {
  colorDiv.style.display = "flex";
  playBtn.style.display = "none";
}

function changeColor() {
  const selectedColor = colorInput.value;
  body.style.background = selectedColor;
  resetBtn.style.display = "block";
  hiddenText.style.display = "block";
  colorInput.style.display = "none";
}

function resetColor() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  body.style.background = "";
  colorInput.style.display = "block";
  playBtn.style.display = "block";
  resetBtn.style.display = "none";
  hiddenText.style.display = "none";
  colorDiv.style.display = "none";
}

// ============================================
// SPOTIFY MINI PLAYER
// ============================================
const spotifyWidget = document.getElementById("spotify-widget");
const spotifyToggle = document.getElementById("spotify-toggle");
const spotifyClose = document.getElementById("spotify-close");

spotifyToggle?.addEventListener("click", () => {
  spotifyWidget.classList.add("open");
});

spotifyClose?.addEventListener("click", () => {
  spotifyWidget.classList.remove("open");
});

// ============================================
// PROJECT FILTER
// ============================================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyStates = document.querySelectorAll(".project-empty");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let visibleCount = 0;
    projectCards.forEach((card) => {
      const match = card.dataset.category === filter;
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    emptyStates.forEach((el) => {
      el.hidden = el.dataset.emptyFor !== filter || visibleCount > 0;
    });
  });
});
