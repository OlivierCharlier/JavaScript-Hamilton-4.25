/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
   

    document.querySelector("#run").addEventListener("click", () => {
        let input = +(document.getElementById("hero-id").value);
            
        // Récupérer les infos du serveur local comme pour l'ex 11.1
        fetch("http://localhost:3000/heroes")
          .then(function (dataHeroes) {
            return dataHeroes.json();
          })
          .then(function (dataHeroes) {
            dataHeroes.forEach(function (hero)  {
            let template = document.getElementById("tpl-hero").content;
            // Récupérer contenu tpl-hero a cloner dans nouvel emplacement
            let location = document.getElementById("target");
                    
                let templateClone = template.cloneNode(true); //cloner template

                if (input === hero.id) {
              templateClone.querySelector(".name").innerHTML = hero.name; //mettre tout au bon endroit pour chaque héro
              templateClone.querySelector(".alter-ego").innerHTML = hero.alterEgo;
              templateClone.querySelector(".powers").innerHTML = hero.abilities.join(", "); // on JOIN pour que les abilities soient listés avec des virgules.
    
              location.appendChild(templateClone); //le nouveau template cloné dans nouvel emplacement
              }
            });
        

          //  document.getElementById("tpl-hero").remove(); //je supprime ancien emplacement pour code plus propre
          });
      });






})();
