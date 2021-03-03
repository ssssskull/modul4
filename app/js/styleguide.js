// Pensum demonstration 🦽 af Daniel!!!!!
let x;
let farver = ['blå', 'rød'];
for (x = 0; x < farver.length; x++) {
  console.log(farver[x]);
}

// Victor
// log, If Else & loop

let vfirstName = "Victor";
let vsurname = "Sehested";

let vfullName = vfirstName + ' ' + vsurname;

if (vfullName == "Victor Sehested") {
    console.log(`Your name is ${vfullName}`);
  } else {
    console.log(`Your name isn't ${vfullName}`)
  };

var vshoppingList = ["Mælk", "Æg", "Ris", "Brød", "Bacon"];
var vloop

console.log(vloop);

for (vloop = 0; vloop < 4; vloop++) {
    console.log(`The number is ${vloop}`);
}

console.log(vloop);

//Frederikke
let fbm;
for (fbm = 0; fbm < 4; fbm++) {
    console.log("Burde nok have brugt et loop til min js :)");
}


// Simone 

let i; 
let simone = ["solskin", "regn", "sne"];
console.log(simone[2])
for (i = 0; i < 4; i++) {
  console.log("Smoth scroll")
}

// Sara

let indkøbsKurv = ["Bacon","Coca Cola"];
let arrayLength = indkøbsKurv.length;
for (let u = 1; u < arrayLength; u++) {
    console.log(indkøbsKurv[u]);
}


// Smooth scroll
let scrollY = 1250;
let distance = 765;
let speed = 600;


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

// Emelie
// log, If Else & loop

function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}










