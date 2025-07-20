// to make my website dynamic, I wanted to first create an array of objects
// quotes is an array of objects, each object contains a quote and the name of the person who said it, as well as the topic the quote relates to
// this allows the data in the array to be used dynamically so that they can populate the quotes on the webpage
const quotes = [
  { text: "Doubt your doubts before you doubt your faith. – Dieter F. Uchtdorf", topic: "faith" },
  { text: "Faith in Jesus Christ is the greatest power in this life. – Russell M. Nelson", topic: "faith" },
  { text: "There is only one in whom your faith is always safe, and that is in the Lord Jesus Christ. – Russell M. Nelson", topic: "faith" },
  { text: "Without repentance, there is no real progress. – D. Todd Christofferson", topic: "repentance" },
  { text: "Repentance is always positive. – Russell M. Nelson", topic: "repentance" },
  { text: "The Savior loves us always but especially when we repent. – Russell M. Nelson", topic: "repentance" },
  { text: "From baptism through spiritual milestones, we make promises with God. – Henry B. Eyring", topic: "baptism" },
  { text: "The baptism of water, without the baptism of fire and the Holy Ghost, is of no use. – Joseph Smith", topic: "baptism" },
  { text: "We recognize the Spirit of the Lord as we invite Him gently. – David A. Bednar", topic: "holy ghost" },
  { text: "You need not know everything before the power of the atonement will work. – Boyd K. Packer", topic: "atonement" },
  { text: "In refusing to forgive, we deny the blessing of the atonement. – Roderick J. Linton", topic: "forgiveness" },
  { text: "Forgiveness is powerful spiritual medicine. – Boyd K. Packer", topic: "forgiveness" }
];

// the quoteContainer is where the quotes will appear on the page
// the searchImput is the text input box where the user can type a topic to search for quotes to help them for their talk! booyeah!
// menu is the dropdown menu that allows the user to select a topic to search for quotes
const quoteContainer = document.getElementById("quoteContainer");
const searchInput = document.getElementById("searchInput");
const menu = document.getElementById("menu");

// alrighty, this was a fun thing that i just wanted to add
// i wanted to use these to randomly assign a border color to each different quote box 
// haha i thought it would be fun to add this
const borderColors = [ 
  "var(--primary-color)",   // this is the blue
  "var(--secondary-color)", // sunshine yellow
  "var(--accent1-color)",   // da red/pink color
  "var(--accent2-color)"    // teal greenish
];

// this function takes an array of quote objects and displays them in the page
// it first clears out the current content of the container with the quoteContainer
function displayQuotes(filteredQuotes) {
  quoteContainer.innerHTML = "";

  // i did this in case the person looking for a quote puts in an invalid topic or ig keyword
  // if they put in something that is not in the array, it will just say "No quotes found" on the page
  // i added the grid thing so that the message was in the middle not just off centered
  if (filteredQuotes.length === 0) {
    quoteContainer.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>No quotes found.</p>";
    return;
  }

// this is where the magic happens haha
// this loop goes through each quote in the array
// broken down simply, it creates a new div element, adds a class called "item", sets a rondom border color from that array, it adds the quote text as the content and then appends the new div into the quoteContainer :)
filteredQuotes.forEach((quote) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.borderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    div.textContent = quote.text;
    quoteContainer.appendChild(div);
  });
}

// this is the initial load meaning it shows all quotes when the page first loads so you can see them all
displayQuotes(quotes);

// these are the event listeners, it adds it to the search input
// this means that whenever the user types something it gets the input value and calls the filterQuotes to filter and sisplay the matching quotes
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value;
  filterQuotes(keyword);
});

// i did this to add an event listener to the dropdown menu
// when the user picks an option, it gets the selected value and then filters and displays the quotes by the topic
menu.addEventListener("change", (e) => {
  const selected = e.target.value;
  filterQuotes(selected);
});

// the value is the users search keyword or topic for their talk
// i used the toLowerCase to make sure it worked no matter if they used upper or lower case
// the .filter is to return only the quotes that match the keyword 
// it them displays the filter quotes! yay! 
function filterQuotes(value) {
  const keyword = value.toLowerCase();
  const filtered = quotes.filter(q => q.topic.toLowerCase().includes(keyword));
  displayQuotes(filtered);
}
