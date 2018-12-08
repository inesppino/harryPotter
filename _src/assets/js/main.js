'use strict';
const btn = document.querySelector('.main__button');
const house = document.querySelector('.house');
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';
const eG = document.querySelector('.emblem_g');
const eR = document.querySelector('.emblem_r');
const eH = document.querySelector('.emblem_h');
const eS = document.querySelector('.emblem_s');

function getARandomHouse(){
fetch('https://www.potterapi.com/v1/sortingHat', {key:key})
    .then(function(response) {
    return response.json();
  })
    .then(function(data) { 
        if(data === 'Gryffindor'){
            house.classList.add('gryff');
            house.classList.remove('huff','sly','rave');
            eR.classList.add('opacity');
            eH.classList.add('opacity');
            eS.classList.add('opacity');
            eG.classList.remove('opacity');
        }
        
        else if (data === 'Hufflepuff'){
            house.classList.add('huff');
            house.classList.remove('gryff','sly','rave');
            eR.classList.add('opacity');
            eG.classList.add('opacity');
            eS.classList.add('opacity');
            eH.classList.remove('opacity');
        }
        
        else if (data === 'Slytherin'){
            house.classList.add('sly');
            house.classList.remove('gryff','huff','rave');
            eR.classList.add('opacity');
            eH.classList.add('opacity');
            eG.classList.add('opacity');
            eS.classList.remove('opacity');
        }
        
        else if (data === 'Ravenclaw'){
            house.classList.add('rave');
            house.classList.remove('gryff','sly','huff');
            eG.classList.add('opacity');
            eH.classList.add('opacity');
            eS.classList.add('opacity');
            eR.classList.remove('opacity');
        }
        
    house.innerHTML = data;
  });
};

btn.addEventListener('click', getARandomHouse);