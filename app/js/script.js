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
      {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 100],
      },
    ],
  });