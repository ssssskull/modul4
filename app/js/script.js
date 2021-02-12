const btnHamburger = document.querySelector(".header__toggle");
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) { // Close Hamburger Menu
    header.classList.remove('open');
  }
  else { // Open Hamburger Menu
    header.classList.add('open');
  }
});

// Lottie animation
LottieInteractivity.create({
  mode: 'scroll',
  player: '#firstLottie',
  actions: [
    {// stopping the animatio until 25% of the container is visible
      visibility: [0, 0.1],
      type: "stop",
      frames: [0]
    },
    {
      visibility: [0.1, 1],
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