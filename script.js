//Cliquer sur le Footer de la page

var footers = document.querySelector('footer');

footers.addEventListener('click',function msg(){console.log("click!")});
  // console.log("click!");

//compter le nombre de clic sur le footer
var footerClick = 0

document.querySelectorAll("footer")[0].addEventListener("click", function(){
  footerClick ++;
  console.log('clic numéro',{footerClick});
})

//Hamburger Menu

var menuBtn = document.querySelector(".navbar-toggler");
console.log(menuBtn)

var onClickBtn = function() {
  let class_to_toggle = document.getElementById("navbarHeader");
  console.log(class_to_toggle);

  class_to_toggle.classList.toggle("collapse");
}
menuBtn.addEventListener("click", onClickBtn);

// on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge
var card1 = document.getElementsByClassName("card")[0];
var editer = document.querySelector("body > main > div > div > div > div:nth-child(1) > div")
// console.log(card1)
// console.log(editer)

function red() {
  card1.style.color = 'red';
}
editer.addEventListener("click",red);

//le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert
var card2 = document.getElementsByClassName("card")[1];
var editer = document.querySelector("body > main > div > div > div > div:nth-child(2) > div")
// console.log(card2)
// console.log(editer)

function green() {
  card2.style.color = 'green';
}

function reset() {


if (card2.style.color === 'green'){

  card2.style.color = '' ;
}
else (card2.style.color == 'green')
  card2.style.color = ''
};
editer.addEventListener("click",green);