/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        
    document.querySelector("#run").addEventListener("click", async() => {
        const items = window.lib.getPersons();
     try {
        const result = await items;
        console.log(result);
     }catch(error){
        console.error(error);
     }
    
    });

})();
