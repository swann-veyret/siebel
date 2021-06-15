//Biographies

var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openModal);
function openModal() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
overlay.style.display='none';
}

var btnPopup2 = document.getElementById('btnPopup2');
var overlay2 = document.getElementById('overlay2');
btnPopup2.addEventListener('click',openModal2);
function openModal2() {
overlay2.style.display='block';
}

var btnClose2 = document.getElementById('btnClose2');
btnClose2.addEventListener('click',closeModal2);
function closeModal2() {
overlay2.style.display='none';
}

var btnPopup3 = document.getElementById('btnPopup3');
var overlay3 = document.getElementById('overlay3');
btnPopup3.addEventListener('click',openModal3);
function openModal3() {
overlay3.style.display='block';
}

var btnClose3 = document.getElementById('btnClose3');
btnClose3.addEventListener('click',closeModal3);
function closeModal3() {
overlay3.style.display='none';
}

var btnPopup4 = document.getElementById('btnPopup4');
var overlay4 = document.getElementById('overlay4');
btnPopup4.addEventListener('click',openModal4);
function openModal4() {
overlay4.style.display='block';
}

var btnClose4 = document.getElementById('btnClose4');
btnClose4.addEventListener('click',closeModal4);
function closeModal4() {
overlay4.style.display='none';
}

var btnPopup5 = document.getElementById('btnPopup5');
var overlay5 = document.getElementById('overlay5');
btnPopup5.addEventListener('click',openModal5);
function openModal5() {
overlay5.style.display='block';
}

var btnClose5 = document.getElementById('btnClose5');
btnClose5.addEventListener('click',closeModal5);
function closeModal5() {
overlay5.style.display='none';
}

var btnPopup6 = document.getElementById('btnPopup6');
var overlay6 = document.getElementById('overlay6');
btnPopup6.addEventListener('click',openModal6);
function openModal6() {
overlay6.style.display='block';
}

var btnClose6 = document.getElementById('btnClose6');
btnClose6.addEventListener('click',closeModal6);
function closeModal6() {
overlay6.style.display='none';
}


//Galerie Photo - https://www.alsacreations.com/tuto/lire/557-galerie-photo-javascript.html

function displayPics()
{
  var photos = document.getElementById('galerie_mini') ;
  // On récupère l'élément ayant pour id galerie_mini
  var liens = photos.getElementsByTagName('a') ;
  // On récupère dans une variable tous les liens contenu dans galerie_mini
  var big_photo = document.getElementById('big_pict') ;
  // Ici c'est l'élément ayant pour id big_pict qui est récupéré, c'est notre photo en taille normale

  var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0] ;
  // Et enfin le titre de la photo de taille normale
  // Une boucle parcourant l'ensemble des liens contenu dans galerie_mini
  for (var i = 0 ; i < liens.length ; ++i) {
    // Au clique sur ces liens 
    liens[i].onclick = function() {
      big_photo.src = this.href; // On change l'attribut src de l'image en le remplaçant par la valeur du lien
      big_photo.alt = this.title; // On change son titre
      titre_photo.firstChild.nodeValue = this.title; // On change le texte de titre de la photo
      return false; // Et pour finir on inhibe l'action réelle du lien
    };
  }
}

// Il ne reste plus qu'à appeler notre fonction au chargement de la page
window.onload = displayPics;