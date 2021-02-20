// Madlibs!


//database
const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", 
    "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]


//query buttons
const btns = document.querySelectorAll(".btn"); 


function generateMadlib() {
    const companyName = companies[Math.floor(Math.random() * companies.length)]
    const firstLetter = companyName.charAt(0)
    const companyString = "My company is a"
        + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ")
        + companyName + " for " + animals[Math.floor(Math.random() * animals.length)]
        + "s! \n"
    
    return companyString;
}
   
btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        
        if (styles.contains("generate")) {
            containerString.textContent = generateMadlib();
        } else {
            containerString.textContent = "Reset! String has been reset.";

            setTimeout(function() {
                containerString.textContent = "Generate new Madlib by clicking \"Generate\"";
            }, 1500);
        }
    });
});

/* See if somehow I can append strings to the containerString with newlines
 * then the below method could work.
 * Untested - but implemented below incase there is a solution found in the future
 */
 /*if (styles.contains("decrease")) {
      var draft = containerString.textContent.slice(0, -1);
      var pos = draft.lastIndexOf("\n");
      if (pos) {
          var result = draft.slice(0, pos);
          containerString.textContent = result;
      }
 }
 */
  
