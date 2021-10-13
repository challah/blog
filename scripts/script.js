
/* WONDERFUL HEAD
-----------------------------------------*/
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

let prevScrollpos = window.pageYOffset;
let show = "no";
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // let headTopInterval = clearInterval(headTop);
    document.getElementById("head").style.bottom = "-110px";
    if (show === "yes") {
      show = "no";
    }
  }
  prevScrollpos = currentScrollPos;
  let bottom = document.body.offsetHeight;
  let almostBottom = bottom * 0.8;
  if (window.innerHeight + window.scrollY >= almostBottom) {
  }
  if (window.innerHeight + window.scrollY >= bottom * 0.97) {
    document.getElementById("head").style.bottom = "-5px";
    // headTopInterval = setInterval(headTop, 2000);
    show = "yes";
  }
};

/* DARK MODE TOGGLE
-----------------------------------------*/

const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const btn = document.querySelector("#btn-toggle");
const switchLabel = document.querySelector("#lightswitch-text");
let theme = currentTheme;

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  btn.checked = false;
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  btn.checked = true;
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      theme = "light";
    } else {
      theme = "dark";
    }
  } else {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    } else {
      theme = "light";
    }
  }
  localStorage.setItem("theme", theme);
  changeLabel();
});

function changeLabel() {
  console.log("invoked ; w ;");
  console.log(theme);
  if (theme == "dark") {
    switchLabel.innerHTML = "Turn on the lights";
  } else {
    switchLabel.innerHTML = "Turn off the lights";
  }
}

// CLOCK -------------------------
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.querySelector(".time").innerHTML = h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

document.body.onload = startTime();