// Image class (could not get import/export to work properly at this time)  
class image {
    constructor(link, altS) {
        this.link = link;
        this.altS = altS;
    }
}
// Links do not show up the same in github
// Image objects
const bridge = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/buildingbridge.jpeg", "Building Bridge");
const whitebuilding = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/architecture.jpeg", "White Building");
const building = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/building.jpeg", "Building");
const metro = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/metro.jpeg", "Washington DC Metro");
const peaches = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/peachtruck.jpeg", "Peach truck");
const rainPool = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/rainpool.jpeg", "Rain while in the pool");
const lax = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/lax.jpeg", "Lacrosse");
const rapids = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/rapids.jpeg", "Kayak in Rapids");
const lamp = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/lamp.jpeg", "Lamp");
const beach = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/beach.jpeg", "Beach with Palms");
const field = new image("https://aholtzer.github.io/CSIT-121/FinalProject/media/field.jpeg", "Field");
// Project categories
const architechture = ["Architecture", bridge, whitebuilding, building];
const lifeStyle = ["Lifestyle", metro, peaches, rainPool];
const sports = ["Sports", lax, rapids];
const design = ["Design", lamp];
const landscape = ["Landscape", beach, field];
// Array of the categories 2D array
const categoryList = [architechture, lifeStyle, sports, design, landscape];
// Project element
const projectArea = document.getElementById("projectbox");
// Run the function to display the projects
displayProjects();
// Display Projects function
function displayProjects() {
    // Html string
    let projectBox = "";
    // Loop outer array
    for (let i = 0; i < categoryList.length; i++) {
        // Get the title (first element)
        let currentCategory = categoryList[i][0];
        // Add the title to the html string
        projectBox += `<h2 class=categorytitle>${currentCategory}</h2><div class=category>`;
        // Loop through the inner array (starting with 1 to avoid the title again)
        for (let j = 1; j < categoryList[i].length; j++){
            // Lamp photo has different dimentions
            if(categoryList[i][j] === lamp) {
                projectBox += `<img class=categoryimg src=${categoryList[i][j].link} alt=${categoryList[i][j].altS} height=680 width=440>`;
            } else {
                projectBox += `<img class=categoryimg src=${categoryList[i][j].link} alt=${categoryList[i][j].altS} height=340 width=580>`; 
            }
        }
        // Close the category container and iterate til done
        projectBox += `</div>`;
    }
    // After the loop add html string to the DOM
    projectArea.innerHTML += projectBox;
}
