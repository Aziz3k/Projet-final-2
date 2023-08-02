$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

//------Carrousel-------------------------

const photos = [
{
	id: 1,
	img:"../assets/img/full-slide/thumb-1.jpg",
},
{
	id: 2,
	img: "../assets/img/full-slide/thumb-2.jpg",
},
{
	id: 3,
	img: "../assets/img/full-slide/thumb-3.jpg",
},
];

const img = document.getElementById('person-img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//decider ou la carrousel commence
let currentItem = 0; 

//j'extrais ma donnee pour pouvoir initialiser mon carrousel au depart
window.addEventListener('DOMContentLoaded', function(){
	const item = photos[currentItem];
	img.src = item.img;	
  });

//Afficher la bonne photo selon ou est-ce qu'on est dans le tableau
function showPerson(person) {
	const item = photos[person];	
	img.src = item.img;	
}

//bouton next
 nextBtn.addEventListener('click', function () {
	currentItem++; 
	if(currentItem > photos.length -1) { 
	  currentItem = 0; 
	} 
	showPerson(currentItem);
  })  
  
 //bouton previous
  prevBtn.addEventListener('click', function() {
	currentItem--; 
	if(currentItem < 0) { 
	  currentItem = photos.length -1;
	} 
	showPerson(currentItem);
  })  


//------------Map----------------------------------------

var map = L.map('map').setView([45.50884, -73.58781], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);
