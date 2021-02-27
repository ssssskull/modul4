console.log("hello");
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
let distance = 10;
let speed = 0.4;

let i;
for (i = 0; i < 4; i++) {
  console.log("Smoth scroll er lavet af Simone")
}

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


/*// Lottie animation
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

// Fem faser js

let faser = Array.from(document.querySelectorAll(".femfaser__circle")); //En array skabes udfra alle elementer i HTML, der har class .femfasercircle, og lagres som en let
let faseFarver = document.querySelector(".femfaser__heading");
let faseNavnFarve = document.querySelector("#h2femfaser");
let femFaserBeskrivelse = document.querySelector("#beskrivelse")
let femFaserUdbytte = document.querySelector("#udbytte");
let femFaseNummer = document.querySelector("#h1femfaser");
let tlf = document.querySelector(".femfaser__tlf");
let mail = document.querySelector(".femfaser__mail");
let buttonRight = document.querySelector(".arrowright");
let buttonLeft = document.querySelector(".arrowleft");
faser[0].style.background = "#A5BA74";

/* function handleClick(e) {
   faser.forEach(node => {
   node.addEventListener('click', handleClick)
 });
 e.preventDefault();
 faser.forEach(node => {
   node.classList.remove("active"); //Fjerner .active class fra alle elementer med class .femfasercircle
 });
 e.currentTarget.classList.add("active"); // Tilføjer class .active til det element, der trykkes på

 if (faser[0].classList.contains("active")) {
   faser[0].style.background = "#A5BA74";
   faser[1].style.background = "#e0e0e0";
   faser[2].style.background = "#e0e0e0";
   faser[3].style.background = "#e0e0e0";
   faser[4].style.background = "#e0e0e0";
   faseFarver.style.background = "#A5BA74";
   faseNavnFarve.style.background = "#A5BA74";
   femFaserBeskrivelse.innerHTML = "#BeCurious handler om at forstå dit behov, men også om at opnå indsigt i, hvorfra behovet udspringer. Vi dykker ned i, hvordan du mener en app- eller webløsning vil tilgodese dit behov og afdækker, hvor langt du selv er i processen. Og med udgangspunkt i vores ekspertviden udfordrer vi dit ståsted.";
   femFaserUdbytte.innerHTML = "Udbyttet af #BeCurious er en række kerne-indsigter, både om din forretning og om løsningens behov, men også om brugskonteksten og brugernes behov. Kerne-indsigterne fra denne fase føres med videre ind i den næste fase, hvor vi starter omdannelsen til et egentligt koncept.";
   femFaseNummer.innerHTML = "01";
   faseNavnFarve.innerHTML = "#BeCurious";
   tlf.style.background = "#A5BA74";
   mail.style.background = "#A5BA74";
   buttonRight.style.opacity = "100";
   buttonLeft.style.opacity = "0";
 }

 else if (faser[1].classList.contains("active")) {
   faser[1].style.background = "#D8A55B";
   faser[0].style.background = "#e0e0e0";
   faser[2].style.background = "#e0e0e0";
   faser[3].style.background = "#e0e0e0";
   faser[4].style.background = "#e0e0e0";
   faseFarver.style.background = "#D8A55B";
   faseNavnFarve.style.background = "#D8A55B";
   femFaserBeskrivelse.innerHTML = "Formålet med #BeCreative er at konceptualisere din løsning. Dette gøres ved omsætning af indsigterne fra den første fase til dét flow, som brugeren vil gennemgå fra start til slut i løsningen. Når alle parter har godkendt flowet, begynder vi at give liv til din løsning ved at udbygge flowet med mockups, for til sidst at stå tilbage med en færdig skitse af din løsning.";
   femFaserUdbytte.innerHTML = "Skitsen gør det muligt for dig tidligt i forløbet at se og gennemgå din løsning og komme med inputs. Det færdige koncept tager vi med videre til næste fase, hvor de tekniske aspekter kortlægges.";
   femFaseNummer.innerHTML = "02";
   faseNavnFarve.innerHTML = "#BeCreative";
   tlf.style.background = "#D8A55B";
   mail.style.background = "#D8A55B";
   buttonLeft.style.opacity = "100";
   buttonRight.style.opacity = "100";
 }

 else if (faser[2].classList.contains("active")) {
   faser[2].style.background = "#AA82AD";
   faser[0].style.background = "#e0e0e0";
   faser[1].style.background = "#e0e0e0";
   faser[3].style.background = "#e0e0e0";
   faser[4].style.background = "#e0e0e0";
   faseFarver.style.background = "#AA82AD";
   faseNavnFarve.style.background = "#AA82AD";
   femFaserBeskrivelse.innerHTML = "I denne fase afdækkes det tekniske aspekt af din løsning. Det gør vi med udgangspunkt i de indsigter, vi har taget med fra de to foregående faser. Det er her vi sikrer, at vi har kortlagt alle afhængigheder og touchpoints for din løsning. Med udgangspunkt i vores ekspertise og erfaring, har vi et solidt grundlag at vurdere og eliminere alle faldgruber ud fra. Vi ved, hvor de fleste usikkerheder opstår, og hvordan vi skal komme dem til livs. Ved at afdække dette så tidligt som muligt, får vi en mere glidende udviklingsproces.";
   femFaserUdbytte.innerHTML = "Når vi er nået igennem #BeTechnical, står vi med et overblik over alle de faktorer, der kan påvirke løsningen, og vi er nu klar til at udarbejde en kravspecifikation for din løsning.";
   femFaseNummer.innerHTML = "03";
   faseNavnFarve.innerHTML = "#BeTechnical";
   tlf.style.background = "#AA82AD";
   mail.style.background = "#AA82AD";
   buttonLeft.style.opacity = "100";
   buttonRight.style.opacity = "100";
 }

 else if (faser[3].classList.contains("active")) {
   faser[3].style.background = "#6696AD";
   faser[0].style.background = "#e0e0e0";
   faser[1].style.background = "#e0e0e0";
   faser[2].style.background = "#e0e0e0";
   faser[4].style.background = "#e0e0e0";
   faseFarver.style.background = "#6696AD";
   faseNavnFarve.style.background = "#6696AD";
   femFaserBeskrivelse.innerHTML = "Formålet med #BeSpecific er at sammenfatte det forudgående arbejde i en kravspecifikation. Kravspecifikationen sikrer at udviklerne kan give et realistisk bud på, hvor lang tid hver enkelt del i løsningen tager at udvikle. Herfra kan vi estimere det overordnede tidsforbrug.";
   femFaserUdbytte.innerHTML = "#BeSpecific munder ud i en detaljeret kravspecifikation. En kravspecifikation er en specifik beskrivelse af den samlede løsning, så udvikleren forstår nøjagtig, hvad det er for en løsning, der skal bygges. Efter denne fase er vi klar til at omdanne det samlede afklarings-arbejde til et færdigt overblik over din løsning.";
   femFaseNummer.innerHTML = "04";
   faseNavnFarve.innerHTML = "BeSpecific";
   tlf.style.background = "#6696AD";
   mail.style.background = "#6696AD";
   buttonLeft.style.opacity = "100";
   buttonRight.style.opacity = "100";
 }

 else if (faser[4].classList.contains("active")) {
   faser[4].style.background = "#D67249";
   faser[0].style.background = "#e0e0e0";
   faser[1].style.background = "#e0e0e0";
   faser[2].style.background = "#e0e0e0";
   faser[3].style.background = "#e0e0e0";
   faseFarver.style.background = "#D67249";
   faseNavnFarve.style.background = "#D67249";
   femFaserBeskrivelse.innerHTML = "Formålet med #BeAwesome er at sammenfatte al den indsamlede viden i et samlet overblik. Du får en velunderbygget pris og struktur for din løsning, som understøtter det overordnede formål med afklaringsfasen, at vi kan levere den ønskede løsning til aftalt tid og pris, så du ved præcis, hvad du kan forvente, når vi starter udviklingsprocessen.";
   femFaserUdbytte.innerHTML = "#BeAwesome er sidste fase i afklaringsforløbet. Alt indhold samles i et endeligt overblik, som du modtager sammen med alle indsigter, vurderinger og beskrivelser samt den endelige pris for udviklingen af din løsning. Værsgo’.";
   femFaseNummer.innerHTML = "05";
   faseNavnFarve.innerHTML = "#BeAwesome";
   tlf.style.background = "#D67249";
   mail.style.background = "#D67249";
   buttonLeft.style.opacity = "100";
   buttonRight.style.opacity = "0";
 }
} */

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
    femFaserBeskrivelse.innerHTML = "#BeCurious handler om at forstå dit behov, men også om at opnå indsigt i, hvorfra behovet udspringer. Vi dykker ned i, hvordan du mener en app- eller webløsning vil tilgodese dit behov og afdækker, hvor langt du selv er i processen. Og med udgangspunkt i vores ekspertviden udfordrer vi dit ståsted.";
    femFaserUdbytte.innerHTML = "Udbyttet af #BeCurious er en række kerne-indsigter, både om din forretning og om løsningens behov, men også om brugskonteksten og brugernes behov. Kerne-indsigterne fra denne fase føres med videre ind i den næste fase, hvor vi starter omdannelsen til et egentligt koncept.";
    femFaseNummer.innerHTML = "01";
    faseNavnFarve.innerHTML = "#BeCurious";
    tlf.style.background = "#A5BA74";
    mail.style.background = "#A5BA74";
    buttonRight.style.opacity = "100";
    buttonLeft.style.opacity = "0";
    faser[0].classList.add("cirkel1");
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
    femFaserBeskrivelse.innerHTML = "Formålet med #BeCreative er at konceptualisere din løsning. Dette gøres ved omsætning af indsigterne fra den første fase til dét flow, som brugeren vil gennemgå fra start til slut i løsningen. Når alle parter har godkendt flowet, begynder vi at give liv til din løsning ved at udbygge flowet med mockups, for til sidst at stå tilbage med en færdig skitse af din løsning.";
    femFaserUdbytte.innerHTML = "Skitsen gør det muligt for dig tidligt i forløbet at se og gennemgå din løsning og komme med inputs. Det færdige koncept tager vi med videre til næste fase, hvor de tekniske aspekter kortlægges.";
    femFaseNummer.innerHTML = "02";
    faseNavnFarve.innerHTML = "#BeCreative";
    tlf.style.background = "#D8A55B";
    mail.style.background = "#D8A55B";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[1].classList.add("cirkel2");
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
    femFaserBeskrivelse.innerHTML = "I denne fase afdækkes det tekniske aspekt af din løsning. Det gør vi med udgangspunkt i de indsigter vi har taget med fra de to foregående faser. Det er her vi sikrer, at vi har kortlagt alle afhængigheder og touchpoints for din løsning. Med udgangspunkt i vores ekspertise og erfaring, har vi et solidt grundlag at vurderer og eliminerer alle faldgruber ud fra. Vi ved, hvor de fleste usikkerheder opstår, og hvordan vi skal komme dem til livs. Ved at afdække dette så tidligt som muligt, får vi en mere glidende udviklingsproces.";
    femFaserUdbytte.innerHTML = "Når vi er nået igennem #BeTechnical, står vi med et overblik over alle de faktorer, der kan påvirke løsningen, og vi er nu klar til at udarbejde en kravspecifikation for din løsning.";
    femFaseNummer.innerHTML = "03";
    faseNavnFarve.innerHTML = "#BeTechnical";
    tlf.style.background = "#AA82AD";
    mail.style.background = "#AA82AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[2].classList.add("cirkel3");
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
    femFaserBeskrivelse.innerHTML = "Formålet med #BeSpecific er at sammenfatte det forudgående arbejde i en kravspecifikation. Kravspecifikationen sikrer at udviklerne kan give et realistisk bud på, hvor lang tid hver enkelt del i løsningen tager at udvikle. Herfra kan vi estimere det overordnede tidsforbrug.";
    femFaserUdbytte.innerHTML = "#BeSpecific munder ud i en detaljeret kravspecifikation. En kravspecifikation er en specifik beskrivelse af den samlede løsning, så udvikleren forstår nøjagtig, hvad det er for en løsning, der skal bygges. Efter denne fase er vi klar til at omdanne det samlede afklarings-arbejde til et færdigt overblik over din løsning.";
    femFaseNummer.innerHTML = "04";
    faseNavnFarve.innerHTML = "BeSpecific";
    tlf.style.background = "#6696AD";
    mail.style.background = "#6696AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[3].classList.add("cirkel4");
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
    femFaserBeskrivelse.innerHTML = "Formålet med #BeCreative er at konceptualisere din løsning. Dette gøres ved omsætning af indsigterne fra den første fase til dét flow, som brugeren vil gennemgå fra start til slut i løsningen. Når alle parter har godkendt flowet, begynder vi at give liv til din løsning ved at udbygge flowet med mockups, for til sidst at stå tilbage med en færdig skitse af din løsning.";
    femFaserUdbytte.innerHTML = "Skitsen gør det muligt for dig tidligt i forløbet at se og gennemgå din løsning og komme med inputs. Det færdige koncept tager vi med videre til næste fase, hvor de tekniske aspekter kortlægges.";
    femFaseNummer.innerHTML = "02";
    faseNavnFarve.innerHTML = "#BeCreative";
    tlf.style.background = "#D8A55B";
    mail.style.background = "#D8A55B";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[0].classList.remove("cirkel1");
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
    femFaserBeskrivelse.innerHTML = "I denne fase afdækkes det tekniske aspekt af din løsning. Det gør vi med udgangspunkt i de indsigter vi har taget med fra de to foregående faser. Det er her vi sikrer, at vi har kortlagt alle afhængigheder og touchpoints for din løsning. Med udgangspunkt i vores ekspertise og erfaring, har vi et solidt grundlag at vurderer og eliminerer alle faldgruber ud fra. Vi ved, hvor de fleste usikkerheder opstår, og hvordan vi skal komme dem til livs. Ved at afdække dette så tidligt som muligt, får vi en mere glidende udviklingsproces.";
    femFaserUdbytte.innerHTML = "Når vi er nået igennem #BeTechnical, står vi med et overblik over alle de faktorer, der kan påvirke løsningen, og vi er nu klar til at udarbejde en kravspecifikation for din løsning.";
    femFaseNummer.innerHTML = "03";
    faseNavnFarve.innerHTML = "#BeTechnical";
    tlf.style.background = "#AA82AD";
    mail.style.background = "#AA82AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[1].classList.remove("cirkel2");
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
    femFaserBeskrivelse.innerHTML = "Formålet med #BeSpecific er at sammenfatte det forudgående arbejde i en kravspecifikation. Kravspecifikationen sikrer at udviklerne kan give et realistisk bud på, hvor lang tid hver enkelt del i løsningen tager at udvikle. Herfra kan vi estimere det overordnede tidsforbrug.";
    femFaserUdbytte.innerHTML = "#BeSpecific munder ud i en detaljeret kravspecifikation. En kravspecifikation er en specifik beskrivelse af den samlede løsning, så udvikleren forstår nøjagtig, hvad det er for en løsning, der skal bygges. Efter denne fase er vi klar til at omdanne det samlede afklarings-arbejde til et færdigt overblik over din løsning.";
    femFaseNummer.innerHTML = "04";
    faseNavnFarve.innerHTML = "BeSpecific";
    tlf.style.background = "#6696AD";
    mail.style.background = "#6696AD";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "100";
    faser[2].classList.remove("cirkel3");
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
    femFaserBeskrivelse.innerHTML = "Formålet med #BeAwesome er at sammenfatte al den indsamlede viden i et samlet overblik. Du får en velunderbygget pris og struktur for din løsning, som understøtter det overordnede formål med afklaringsfasen, at vi kan levere den ønskede løsning til aftalt tid og pris, så du ved præcis, hvad du kan forvente, når vi starter udviklingsprocessen.";
    femFaserUdbytte.innerHTML = "#BeAwesome er sidste fase i afklaringsforløbet. Alt indhold samles i et endeligt overblik, som du modtager sammen med alle indsigter, vurderinger og beskrivelser samt den endelige pris for udviklingen af din løsning. Værsgo’.";
    femFaseNummer.innerHTML = "05";
    faseNavnFarve.innerHTML = "#BeAwesome";
    tlf.style.background = "#D67249";
    mail.style.background = "#D67249";
    buttonLeft.style.opacity = "100";
    buttonRight.style.opacity = "0";
    faser[3].classList.remove("cirkel4");
    buttonRight.setAttribute("pointer-events", "none");
  }
}



/*faser.forEach(node => {
 node.addEventListener('click', handleClick);
}); */

buttonRight.addEventListener("click", buttonClickFrem);
buttonLeft.addEventListener("click", buttonClickTilbage);

//Nav farveskift js















//const header = document.querySelector('.header');

// btnHamburger.addEventListener('click', function () {
//   if (header.classList.contains('open')) { // Close Hamburger Menu
//     header.classList.remove('open');
//   }
//   else { // Open Hamburger Menu
//     header.classList.add('open');
//   }
// });


/*input = parseFloat(input);



function next_id(input) {
  var output = parseInt(input, 10) + 1; // parse and increment
  output += ""; // convert to string
  while (output.length < 2) output = "0" + output; // prepend leading zeros
  return output;
}

const id = "00";
for (var increment = 0; increment < 20; increment++) {
  console.log(id);
  id = next_id(id);
}

/*function incrementNummer() {
  document.querySelector("#h1femfaser").value = nummer += 2;
}

let button = document.querySelector("button");
button.addEventListener("click", incrementNummer)
*/

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
})

/* document.addEventListener('scroll', function(event) {
    let csik = document.getElementById("csik").getBoundingClientRect()
    document.querySelector(".nav.takaro").style = "clip: rect("+csik.y+"px, 200px, "+(csik.y+csik.height)+"px, 0px);"
}) */
// TODO add block to onload to fix color change
