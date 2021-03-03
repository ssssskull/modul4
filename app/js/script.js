// Viewport 100vh fix af Daniel!!!!!
let scrollToContent = document.getElementById("#scrollToContent");
let mainContainer = document.getElementById("#mainContainer");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

// Hamburger toggle af Daniel!!!!!
const btnHamburger = document.querySelector(".header__toggle");
const header = document.querySelector('.header');
const bodyTarget = document.querySelector("body");
const btnToggle = document.querySelectorAll(".header__burger");

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) { // Close Hamburger Menu
    header.classList.remove('open');
    bodyTarget.style.overflow = "unset";

  }
  else { // Open Hamburger Menu
    header.classList.add('open');
    bodyTarget.style.overflow = "hidden";
  }
});

// Smoth scroll af Simone!!!!!
let scrollY = 0;
let distance = 10;
let speed = 0.4;

function autoScrollTo(el) {
  let currentY = window.pageYOffset;
  let targetY = document.getElementById(el).offsetTop;
  let bodyHeight = document.body.offsetHeight;
  let yPos = currentY + window.innerHeight;
  let animator = setTimeout('autoScrollTo(\'' + el + '\')', speed);

  if (yPos > bodyHeight) {
    clearTimeout(animator);
  }

  else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }

    else {
      clearTimeout(animator);
    }
  }
}


function autoScrollToFem(el) {
  let distance = 10;
  let currentY = window.pageYOffset;
  let targetY = document.getElementById(el).offsetTop;
  let bodyHeight = document.body.offsetHeight;
  let yPos = currentY + window.innerHeight;
  let animator = setTimeout('autoScrollToFem(\'' + el + '\')', 0.4);

  if (yPos > bodyHeight) {
    clearTimeout(animator);
  }

  else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }

    else {
      clearTimeout(animator);
    }
  }
}

function autoScrollToAfklaring(el) {
  let distance = 10;
  let currentY = window.pageYOffset;
  let targetY = document.getElementById(el).offsetTop;
  let bodyHeight = document.body.offsetHeight;
  let yPos = currentY + window.innerHeight;
  let animator = setTimeout('autoScrollToAfklaring(\'' + el + '\')', 0.4);

  if (yPos > bodyHeight) {
    clearTimeout(animator);
  }

  else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }

    else {
      clearTimeout(animator);
    }
  }
}




// Clickable div af Daniel!!!!!

let clickDiv1 = document.getElementById('project-au');
let clickDiv2 = document.getElementById('project-gg');
let link1 = `https://www.houseofcode.io/projekter/aarhus-universitet-evacuate/`;
let link2 = `https://www.houseofcode.io/projekter/guloggratis/`;

clickDiv1.addEventListener("click", function () {
  window.open(link1, '_self');
});
clickDiv2.addEventListener("click", function () {
  window.open(link2, '_self');
});

// Lottie animation af Daniel!!!!!
LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie',
  autoplay: false,
  loop: false,
  actions: [
    {
      visibility: [0, 0.9],
      type: "seek",
      frames: [0, 71],

    },
    {
      visibility: [0.9, 1],
      type: "stop",
      frames: [71, 72],

    }
  ]
  ,
});
LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie2',
  autoplay: "true",
  actions: [
    {
      visibility: [0, 0.9],
      type: "seek",
      frames: [0, 95],

    },
    {
      visibility: [0.9, 1],
      type: "stop",
      frames: [95, 96],

    }
  ]
  ,
}); LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie3',
  autoplay: "true",
  actions: [
    {
      visibility: [0, 0.9],
      type: "seek",
      frames: [0, 75],

    },
    {
      visibility: [0.9, 1],
      type: "stop",
      frames: [75, 76],

    }
  ]
});

// Fem faser js af Frederikke!!!!!

let faser = Array.from(document.querySelectorAll(".femfaser__circle")); //En array skabes udfra alle elementer i HTML, der har class .femfasercircle, og lagres som en let
let faseFarver = document.querySelector(".femfaser__heading");
let faseNavnFarve = document.querySelector("#h2femfaser");
let femFaseNummer = document.querySelector("#h1femfaser");
let tlf = document.querySelector(".femfaser__tlf");
let mail = document.querySelector(".femfaser__mail");
let buttonRight = document.querySelector(".arrowright");
let buttonLeft = document.querySelector(".arrowleft");
let femFaserTekst = Array.from(document.querySelectorAll(".femfaser__textcont"));
faser[0].style.background = "#A5BA74";


function buttonClickTilbage(t) {
  t.preventDefault();
  faser.forEach(node => {
    node.classList.remove("active"); //Fjerner .active class fra alle elementer med class .femfasercircle
  });
  t.currentTarget.classList.add("active");
  buttonLeft.setAttribute("pointer-events", "none");

  if (faser[1].classList.contains("cirkel2")) {
    faser[0].style.background = "#A5BA74";
    faser[1].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#A5BA74";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#A5BA74";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "01";
    faseNavnFarve.innerHTML = "#BeCurious";
    tlf.style.background = "#A5BA74";
    mail.style.background = "#A5BA74";
    buttonRight.style.opacity = "100";
    buttonLeft.style.opacity = "0";
    faser[0].classList.add("cirkel1");

    femFaserTekst[0].classList.remove("hidden");
    femFaserTekst[0].classList.add("visible");

    femFaserTekst[1].classList.remove("visible");
    femFaserTekst[1].classList.add("hidden");

  }

  else if (faser[2].classList.contains("cirkel3")) {
    faser[1].style.background = "#D8A55B";
    faser[0].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#D8A55B";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#D8A55B";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "02";
    faseNavnFarve.innerHTML = "#BeCreative";
    tlf.style.background = "#D8A55B";
    mail.style.background = "#D8A55B";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[1].classList.add("cirkel2");

    femFaserTekst[1].classList.remove("hidden");
    femFaserTekst[1].classList.add("visible");

    femFaserTekst[2].classList.remove("visible");
    femFaserTekst[2].classList.add("hidden");
  }

  else if (faser[3].classList.contains("cirkel4")) {
    faser[2].style.background = "#AA82AD";
    faser[0].style.background = "#CCCCCC";
    faser[1].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#AA82AD";
    faseNavnFarve.style.background = "#AA82AD";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "03";
    faseNavnFarve.innerHTML = "#BeTechnical";
    tlf.style.background = "#AA82AD";
    mail.style.background = "#AA82AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[2].classList.add("cirkel3");

    femFaserTekst[2].classList.remove("hidden");
    femFaserTekst[2].classList.add("visible");

    femFaserTekst[3].classList.remove("visible");
    femFaserTekst[3].classList.add("hidden");
  }

  else if (faser[4].classList.contains("cirkel5")) {
    faser[3].style.background = "#6696AD";
    faser[0].style.background = "#CCCCCC";
    faser[1].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#6696AD";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#6696AD";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "04";
    faseNavnFarve.innerHTML = "BeSpecific";
    tlf.style.background = "#6696AD";
    mail.style.background = "#6696AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[3].classList.add("cirkel4");

    femFaserTekst[3].classList.remove("hidden");
    femFaserTekst[3].classList.add("visible");

    femFaserTekst[4].classList.remove("visible");
    femFaserTekst[4].classList.add("hidden");
  }
}

function buttonClickFrem(f) {
  f.preventDefault();
  faser.forEach(node => {
    node.classList.remove("active"); //Fjerner .active class fra alle elementer med class .femfasercircle
  });
  f.currentTarget.classList.add("active");


  if (faser[0].classList.contains("cirkel1")) {
    faser[1].style.background = "#D8A55B";
    faser[0].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#D8A55B";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#D8A55B";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "02";
    faseNavnFarve.innerHTML = "#BeCreative";
    tlf.style.background = "#D8A55B";
    mail.style.background = "#D8A55B";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[0].classList.remove("cirkel1");

    femFaserTekst[0].classList.add("hidden");
    femFaserTekst[0].classList.remove("visible");

    femFaserTekst[1].classList.add("visible");
    femFaserTekst[1].classList.remove("hidden");
  }

  else if (faser[1].classList.contains("cirkel2")) {
    faser[2].style.background = "#AA82AD";
    faser[0].style.background = "#CCCCCC";
    faser[1].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#AA82AD";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#AA82AD";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "03";
    faseNavnFarve.innerHTML = "#BeTechnical";
    tlf.style.background = "#AA82AD";
    mail.style.background = "#AA82AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[1].classList.remove("cirkel2");

    femFaserTekst[1].classList.add("hidden");
    femFaserTekst[1].classList.remove("visible");

    femFaserTekst[2].classList.add("visible");
    femFaserTekst[2].classList.remove("hidden");

  }

  else if (faser[2].classList.contains("cirkel3")) {
    faser[3].style.background = "#6696AD";
    faser[0].style.background = "#CCCCCC";
    faser[1].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[4].style.background = "#CCCCCC";
    faseFarver.style.color = "#6696AD";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#6696AD";
    faseNavnFarve.style.transition = "all .2s";
    femFaseNummer.innerHTML = "04";
    faseNavnFarve.innerHTML = "#BeSpecific";
    tlf.style.background = "#6696AD";
    mail.style.background = "#6696AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[2].classList.remove("cirkel3");

    femFaserTekst[2].classList.add("hidden");
    femFaserTekst[2].classList.remove("visible");

    femFaserTekst[3].classList.add("visible");
    femFaserTekst[3].classList.remove("hidden");
  }

  else if (faser[3].classList.contains("cirkel4")) {
    faser[4].style.background = "#D67249";
    faser[0].style.background = "#CCCCCC";
    faser[1].style.background = "#CCCCCC";
    faser[2].style.background = "#CCCCCC";
    faser[3].style.background = "#CCCCCC";
    faseFarver.style.color = "#D67249";
    faseFarver.style.transition = "all .2s";
    faseNavnFarve.style.background = "#D67249";
    faseNavnFarve.style.transition = "all .2s";
    faseNavnFarve.innerHTML = "#BeAwesome";
    femFaseNummer.innerHTML = "05";
    tlf.style.background = "#D67249";
    mail.style.background = "#D67249";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "0";
    faser[3].classList.remove("cirkel4");
    buttonRight.setAttribute("pointer-events", "none");

    femFaserTekst[3].classList.add("hidden");
    femFaserTekst[3].classList.remove("visible");

    femFaserTekst[4].classList.add("visible");
    femFaserTekst[4].classList.remove("hidden");
  }
}

buttonRight.addEventListener("click", buttonClickFrem);
buttonLeft.addEventListener("click", buttonClickTilbage);

//Nav farveskift js af Daniel!!!!!
//Adds mask and changes size of it depended on which container is sent through the parameters
function scrollColorChange(container) {
  container = container.getBoundingClientRect()
  document.querySelector(".nav.takaro").style = "clip: rect(" + (container.y - 50) + "px, " + container.width + "px," + (container.y + container.height) + "px, 0px);"
  document.querySelector("#dontcry").style = "clip: rect(" + (container.y - 30) + "px, " + container.width + "px," + (container.y + container.height) + "px, -50px);"

  let headerSelector = document.querySelector("header");

  if (headerSelector.classList.contains("open")) {
    document.querySelector("#dontcry").style = "clip: rect(0 0 0 0);";
  }
}

//Selection of containers and array that contains them for further use
const projectscontainer = document.querySelector(".projects");
const famfaserHugeSection = document.querySelector("#TestSection");
const mainContainerColorChange = document.getElementById("mainContainer");

const visibleCheckItems = [mainContainerColorChange, famfaserHugeSection];

//Checks whether a valid container is visible
function isAnyPartOfElementInViewport(visibleCheckItems) {
  let check = false;
  let priorElement = null;
  visibleCheckItems.forEach(element => {
    const rect = element.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    if ((vertInView && horInView) & !(priorElement)) {
      check = element;
    }
    priorElement = (vertInView && horInView);
  });
  return check;
}
window.onload = scrollColorChange(mainContainerColorChange);
document.addEventListener('scroll', function () {
  //Returns container if its visible or false if non of the containers were visible
  const IsVisibleContainer = isAnyPartOfElementInViewport(visibleCheckItems)
  //Checks if the container that might've been returned is in the array of containers
  if (visibleCheckItems.includes(IsVisibleContainer)) {
    scrollColorChange(IsVisibleContainer);
  }
});