const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';


fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);
   const prophets = jsonObject['prophets'];
   for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);
      let  birthdate = document.createElement('div');

      birthdate.setAttribute('class', 'birthdate')
      birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      card.appendChild(birthdate);
      let  birthplace = document.createElement('div');
     
      birthplace.setAttribute('class', 'birthplace')
      birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      card.appendChild(birthplace);
      let image = document.createElement('img');

      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);
   }
});