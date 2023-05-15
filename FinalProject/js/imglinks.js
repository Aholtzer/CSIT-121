// Dom Elements
const home = document.getElementById("homecontainer");
const slideBox = document.getElementById("slidebox");
// Image class (could not get import/export to work properly at this time)  
class image {
    constructor(link, altS) {
        this.link = link;
        this.altS = altS;
    }
}
// Image object instances
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
// Images array
const images = [bridge, metro, whitebuilding, lax, beach, building, field, peaches, rainPool, rapids];
// Tracks current index
let currentIndex = 0;
// Tracks the timer so the buttons reset the timeouts
let timer;
// Create the imagge slides html
createSlides();
// Get Buttons after they are made
const backBtn = document.getElementById('btnback');
const nextBtn = document.getElementById('btnnext');
// Next button event listener
nextBtn.addEventListener("click", function() {
    //console.log("Next");
    // Resets the auto timer for the slideshow
    clearTimeout(timer);
    // Run run the auto timer
    runSlideShow();
});
// Back Button event listener
backBtn.addEventListener("click", function() {
    //console.log("Back");
    // Clear timer
    clearTimeout(timer);
    // Go back 2 because the runSlideShow function incriments 
    currentIndex = currentIndex - 2;
    // Make sure index is in valid range 
    if (currentIndex < 0) {
        // Reset to 1 less than the last index
        currentIndex = 9;
    }
    // Run the auto timer again
    runSlideShow();
})
// Initial start to run the slideshow
runSlideShow();
// Slide show function
function runSlideShow() {
    // Get each images card
    let slides = document.getElementsByClassName("imagecard");
    // Loop through the image cards
    for (i = 0; i < slides.length; i++) {
        // Hide all of the elements
        slides[i].style.display = "none";
    }
    // Incriment the current index
    currentIndex++;
    // If index exceeds reset
    if (currentIndex > slides.length) {
        currentIndex = 1
    }
    // Reset timer if count is going over 
    if (timer > slides.length) {
        timer = 0;
    }
    // Display the image before the current iteration
    slides[currentIndex-1].style.display = "flex";
    //console.log(currentIndex);
    // Reset time and recursively run the loop again
    timer = setTimeout(runSlideShow, 10000);
}
// Adds the image slides to the DOM
function createSlides() {
    // Empty String for html
    let slidesString = "";
    // Loop through each image 
    for (let i = 0; i < images.length; i++) {
        // Add the html elements
        slidesString += `<div class="imagecard transitioner">
        <img src=${images[i].link} alt=${images[i].altS}>
        </div>`;
    }
    // Add buttons and the html string
    slideBox.innerHTML = `<button class=slidebtn id=btnback>&#8678;</button>` + slidesString + `<button class=slidebtn id=btnnext>&#8680;</button>`;
}
