'use strict';
const btn = document.querySelector('.main__button');
const house = document.querySelector('.house');
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';


function getARandomHouse(){
fetch('https://www.potterapi.com/v1/sortingHat', {key:key})
    .then(function(response) {
    return response.json();
  })
    .then(function(data) { 
    house.innerHTML = data;
  });
};

btn.addEventListener('click', getARandomHouse);