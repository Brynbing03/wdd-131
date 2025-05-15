// this makes sure that the whole HTML doc is loaded before running all the JS
document.addEventListener("DOMContentLoaded", () => {
    // this finds the menu button and saves it as a variable
    const menuButton = document.getElementById("menuButton");
    // this finds the list
    const mainNav = document.querySelector("#mainNav ul");

    console.log(mainNav)

    // this is going to hide the menu, it is the hide class in the css
    mainNav.classList.add("hide");

    // this is what is in charge of hiding or showing the hide class
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("hide");
        console.log("Button Clicked")
    });

    // screen resize
    // this first line will only run when the screen window size is changed
    function handleResize (){
        // this makes the menu show if the screen is wider than 900px
        
        if (window.innerWidth > 900){
            console.log(mainNav)
            mainNav.classList.remove("hide");
            
            
        }
        // this makes the menu hidden if the screen is 900px or less
        else {
            mainNav.classList.add("hide");
        }
    }
    // everytime the screen/window is resized, this tells it to run the handleResize function
    window.addEventListener("resize", handleResize);
    // this runs when the page loads to make sure that the menu is being displayed correctly
    handleResize();
});

// this finds the element woth the class gallery and this has the clickable images
const gallery = document.querySelector(".gallery");
// this creates a modal dialog and adds a css class for styling and puts the modal into the body of the page
const modal = document.createElement("dialog");
modal.classList.add("image-modal");
document.body.appendChild(modal);

// this adds a click listener to the whole gallery
gallery.addEventListener("click", (event) => {
    // this checks if the thing being clicked was an image and if not it exits the function
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;

    // this replaces the text in the filename to get the full size image
    const alt = clickedImage.alt;
    const src = clickedImage.src.split("-");
    const newSrc = src[0] + "-full.jpeg"

    // this fills the modal with the full size image and a close button
    modal.innerHTML = `
    <img src="${newSrc}" alt="${alt}">
    <button class="close-viewer">X</button>`;

    // this opens the modal and shows it on the screen
    modal.showModal();

    // this closed the modal when the button is clicked
    modal.querySelector(".close-viewer").addEventListener("click", () => {
        modal.close();
    });
});