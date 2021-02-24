
// Hamburger toggle
const btnHamburger = document.querySelector(".header__toggle");
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) { // Close Hamburger Menu
    header.classList.remove('open');
  }
  else { // Open Hamburger Menu
    header.classList.add('open');
  }
});


// Smoth scroll 
let scrollY = 0;
let distance = 40;
let speed = 15;

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


// Lottie animation
LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie',
  //TODO fix trigger mobile/desktop container: "#lottieTriggerFirst",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 49]
    }
  ],
});
// Offsetting:
/*
{// stopping the animatio until 25% of the container is visible
  visibility: [0, 0.25],
  type: "stop",
  frames: [0]
},
{// Start playing after 25% of the container is visible
  visibility: [0.25, 1],
  type: "seek",
  frames: [0, 100]
}
*/
/*not sure if this works lol setTimeout(function () { animation.play(); }, 20000);*/

// Smooth Scroll Safari

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
});

// Fem faser js

