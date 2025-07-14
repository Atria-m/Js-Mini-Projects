const copyBtn = document.querySelector("#copy-btn");
const textArea = document.querySelector("#text-input");

copyBtn.addEventListener("click", () => {
  textArea.select();
  let textValue = textArea.value;

  navigator.clipboard.writeText(textValue);
  copyBtn.innerText = "کپی شد";
  copyBtn.style.backgroundColor = "#3B82F6 ";

  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.backgroundColor = "#1D4ED8";
  }, 1500);
});

const modal = document.querySelector(".modal-container");
const openModal = document.getElementById("openBtn");
const closeModal = document.querySelector(".closeBtn");

openModal.addEventListener("click", () => {
  modal.classList.remove("fade-out");
  modal.style.display = "block";
  modal.classList.add("fade-in");
});

function closeWithAnimation() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 500);
}

closeModal.addEventListener("click", closeWithAnimation);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeWithAnimation();
  }
});

const toggleThemeBtn = document.getElementById("toggle-theme");
const htmlEl = document.documentElement;
const themeIcon = document.getElementById("theme-icon");

const ICONS = {
  light: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3
         m16.24 5.66l-1.42-1.42M6.18 6.18L4.76 4.76
         m14.14 0l-1.42 1.42M6.18 17.82l-1.42 1.42
         M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
  `,
  dark: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M21 12.79A9 9 0 1111.21 3
         7 7 0 0021 12.79z" />
  </svg>
  `,
};

function setTheme(mode) {
  if (mode === "dark") {
    htmlEl.classList.add("dark");
  } else {
    htmlEl.classList.remove("dark");
  }
  localStorage.setItem("theme", mode);
  themeIcon.innerHTML = ICONS[mode];
}

toggleThemeBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

setTheme(localStorage.getItem("theme") || "light");

const contextMenu = document.querySelector(".container-right-click");
const subMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.clientX;
  let y = e.clientY;

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const cmWidth = contextMenu.offsetWidth;
  const cmHeight = contextMenu.offsetHeight;

  if (x > winWidth - cmWidth) {
    x = winWidth - cmWidth;
  }
  if (y > winHeight - cmHeight) {
    y = winHeight - cmHeight;
  }

  if (x > winWidth - cmWidth - subMenu.offsetWidth) {
    subMenu.style.left = "-175px";
  } else {
    subMenu.style.left = "280px";
  }

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";

  document.body.style.overflow = "hidden";
});

document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";

  document.body.style.overflow = "";
});
