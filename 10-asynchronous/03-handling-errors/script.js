/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    function callBack(error, peopleArray) {
        if (error) {
          console.error(error); // en mettant error tel quel, il va chercher le texte qui se trouve dans error, défini dans le script de l'exercice. J'aurais pu noter "Error!" qui aurait afficher Error!
        } else {
              console.log(peopleArray);
        }
      }

      document.getElementById("run").addEventListener("click", function () {
        window.lib.getPersons(callBack);
      });





})();
