// initial try that obviously wasn't right and I didn't know what I was doing... 
// const themeSelect = document.getElementById('theme');
// const body = document.body;
// const logo = document.getElementById('byui-logo');

// function changeTheme() {
//     const selectedTheme = themeSelect.value;

//     if (selectedTheme === 'dark') {
//         body.classList.add('dark');
//         logo.src = 'byui.logo.white.png';
//     } else {
//         body.classList.remove('dark');
//         logo.src = 'byui.logo.png';
//     }
// }

// themeSelect.addEventListener('change', changeTheme);


let selectElem = document.querySelector("select");

let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);
 
function changeTheme() {
    let current = selectElem.value; 

    if (current == "dark") {
        document.body.className = "dark";
        logo.setAttribute("src", "byui-logo_white.png");
}
    else if (current === "light")
    {
        document.body.classList.remove("dark");
        logo.setAttribute("src", "byui.logo.png");
    }
}
