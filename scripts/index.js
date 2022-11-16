var video = document.getElementById("video");
var container = document.getElementById("video-container");
var overview = document.getElementById("overview");
var arrow = document.getElementById("form-arrow");
var form = document.getElementById("form-container");
var navMenu = document.getElementById("nav-menu");
var navMobile = document.getElementById("nav-bar-mobile");

function setupVideo() {
  overview.style.display = "none";
  video.style.display = "block";
  container.style.display = "grid";

  if (window.innerWidth > window.innerHeight) {
    video.play();
    video.addEventListener("ended", function () {
      video.style.display = "none";
      container.style.display = "none";
      overview.style.display = "grid";
    });
    window.addEventListener("scroll", function () {
      video.pause();
      video.style.display = "none";
      container.style.display = "none";
      overview.style.display = "grid";
    });
  } else {
    video.play();
    video.addEventListener("pause", function () {
      video.style.display = "none";
      container.style.display = "none";
      overview.style.display = "grid";
    });
    video.addEventListener("ended", function () {
      video.style.display = "none";
      container.style.display = "none";
      overview.style.display = "grid";
    });
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = window.innerHeight * 0.3;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function displayContactUs() {
  if (form.style.display == "block") {
    arrow.style.transform = "rotate(0deg)";
    form.style.display = "none";
  } else {
    expandContactUs();
  }
}

function expandContactUs() {
  arrow.style.transform = "rotate(90deg)";
  form.style.display = "block";
}

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 500;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");
    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function showProductInNav() {
  if (window.scrollY >= 50) {
    document.getElementById("nav-product-name").style.opacity = "1";
  } else {
    document.getElementById("nav-product-name").style.opacity = "0";
  }
}

window.addEventListener("scroll", showProductInNav);

function checkIfOpen() {
  if (navMobile.style.width > "0px") {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  var width = window.innerWidth * 0.5;
  navMobile.style.width = width + "px";
  navMenu.style.color = "lightblue";
}

function closeNav() {
  navMobile.style.width = "0px";
  navMenu.style.color = "white";
}

document
  .querySelector("footer section div h3")
  .addEventListener("click", displayContactUs);

document
  .getElementsByClassName("nav-link")[3]
  .addEventListener("click", expandContactUs);

document
  .getElementsByClassName("fa-bars")[0]
  .addEventListener("click", checkIfOpen);

for (let i = 4; i <= 7; i++) {
  document
    .getElementsByClassName("nav-link")
    [i].addEventListener("click", closeNav);
}

document
  .getElementsByClassName("nav-link")[7]
  .addEventListener("click", expandContactUs);

document.getElementById("video-button").addEventListener("click", setupVideo);

//if (window.matchMedia("(orientation: portrait)").matches) {video.requestFullscreen();}
