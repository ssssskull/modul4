const btnHamburger = document.querySelector("#btnHamburger");
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