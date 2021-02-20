// Madlibs!


const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", 
    "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]


const visibleString = document.querySelector("#containerString");
const btns = document.querySelectorAll(".btn"); 

function generateMadlib() {
    const companyName = companies[Math.floor(Math.random() * companies.length)]
    const firstLetter = companyName.charAt(0)
    const companyString = "My company is a"
        + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ")
        + companyName + " for " + animals[Math.floor(Math.random() * animals.length)]
        + "s!\n"
    
    return companyString;
}

btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("increase")) {
            containerString += generateMadlib();
        } else if (styles.contains("decrease")) {
            var draft = containerString.slice(0, -1);
            var pos = containerString.lastIndexOf("\n");
            if (pos) {
                var result = draft.slice(0, pos);
                containerString = result;
            }
        } else {
            containerString = "Generate MadLib";
        }
    });
});
