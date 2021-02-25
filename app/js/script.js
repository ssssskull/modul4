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


let button = document.querySelector(".arrowright");
button.addEventListener("click", incrementNummer)


function incrementNummer() {
  console.log("helloooooo");
  //Vi starter med en string -- når vi trykker på knappen skal vi så konvertere værdien til et nummer --> increment --> lav om til string --> tilføj 0 foran
  let input = document.querySelector("#h1femfaser").innerHTML;
  input = parseFloat(input);
  input = input++;
  console.log(typeof input);
  input = String(input);
  console.log(typeof input);
  //input.value = ++input;

  //console.log(input.padStart(2, '0'));
}

let faser = Array.from(document.querySelectorAll(".femfasercircle")); //En array skabes udfra alle elementer i HTML, der har class .femfasercircle, og lagres som en let
let faseFarver = document.querySelector(".femfaser__heading");
let faseNavnFarve = document.querySelector("#h2femfaser");
let femFaserBeskrivelse = document.querySelector("#beskrivelse")
let femFaserUdbytte = document.querySelector("#udbytte")

const handleClick = (e) => {
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
    faseNavnFarve.style.background = "#A5BA74"
    femFaserBeskrivelse.innerHTML = "#BeCurious handler om at forstå dit behov, men også at opnå indsigt i, hvorfra behovet udspringer. Vi dykker ned i, hvordan du mener en app- eller webløsning vil tilgodese dit behov og afdækker, hvor langt du selv er i processen. Og med udgangspunkt i vores ekspertviden udfordrer vi dit ståsted.";
    femFaserUdbytte.innerHTML = "Udbyttet af #BeCurious er en række kerne-indsigter, både om din forretning og om løsningens behov, men også om brugskonteksten og brugernes behov. Kerne-indsigterne fra denne fase føres med videre ind i den næste fase, hvor vi starter omdannelsen til et egentligt koncept.";
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
  }

  else if (faser[2].classList.contains("active")) {
    faser[2].style.background = "#AA82AD"
    faser[0].style.background = "#e0e0e0";
    faser[1].style.background = "#e0e0e0";
    faser[3].style.background = "#e0e0e0";
    faser[4].style.background = "#e0e0e0";
    faseFarver.style.background = "#AA82AD";
    faseNavnFarve.style.background = "#AA82AD";
    femFaserBeskrivelse.innerHTML = "I denne fase afdækkes det tekniske aspekt af din løsning. Det gør vi med udgangspunkt i de indsigter vi har taget med fra de to foregående faser. Det er her vi sikrer, at vi har kortlagt alle afhængigheder og touchpoints for din løsning. Med udgangspunkt i vores ekspertise og erfaring, har vi et solidt grundlag at vurderer og eliminerer alle faldgruber ud fra. Vi ved, hvor de fleste usikkerheder opstår, og hvordan vi skal komme dem til livs. Ved at afdække dette så tidligt som muligt, får vi en mere glidende udviklingsproces.";
    femFaserUdbytte.innerHTML = "Når vi er nået igennem #BeTechnical, står vi med et overblik over alle de faktorer, der kan påvirke løsningen, og vi er nu klar til at udarbejde en kravspecifikation for din løsning.";
  }

  else if (faser[3].classList.contains("active")) {
    faser[3].style.background = "#6696AD"
    faser[0].style.background = "#e0e0e0";
    faser[1].style.background = "#e0e0e0";
    faser[2].style.background = "#e0e0e0";
    faser[4].style.background = "#e0e0e0";
    faseFarver.style.background = "#6696AD";
    faseNavnFarve.style.background = "#6696AD";
    femFaserBeskrivelse.innerHTML = "Formålet med #BeSpecific er at sammenfatte det forudgående arbejde i en kravspecifikation. Kravspecifikationen sikrer at udviklerne kan give et realistisk bud på, hvor lang tid hver enkelt del i løsningen tager at udvikle. Herfra kan vi estimere det overordnede tidsforbrug.";
    femFaserUdbytte.innerHTML = "#BeSpecific munder ud i en detaljeret kravspecifikation. En kravspecifikation er en specifik beskrivelse af den samlede løsning, så udvikleren forstår nøjagtig, hvad det er for en løsning, der skal bygges. Efter denne fase er vi klar til at omdanne det samlede afklarings-arbejde til et færdigt overblik over din løsning.";
  }

  else if (faser[4].classList.contains("active")) {
    faser[4].style.background = "#D67249"
    faser[0].style.background = "#e0e0e0";
    faser[1].style.background = "#e0e0e0";
    faser[2].style.background = "#e0e0e0";
    faser[3].style.background = "#e0e0e0";
    faseFarver.style.background = "#D67249";
    faseNavnFarve.style.background = "#D67249";
    femFaserBeskrivelse.innerHTML = "Formålet med #BeAwesome er at sammenfatte al den indsamlede viden i et samlet overblik. Du får en velunderbygget pris og struktur for din løsning, som understøtter det overordnede formål med afklaringsfasen, at vi kan levere den ønskede løsning til aftalt tid og pris, så du ved præcis, hvad du kan forvente, når vi starter udviklingsprocessen.";
    femFaserUdbytte.innerHTML = "#BeAwesome er sidste fase i afklaringsforløbet. Alt indhold samles i et endeligt overblik, som du modtager sammen med alle indsigter, vurderinger og beskrivelser samt den endelige pris for udviklingen af din løsning. Værsgo’.";
  }
}

  faser.forEach(node => {
    node.addEventListener('click', handleClick);
  });




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
  });