// THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
// WHEN I click the light mode/dark mode toggle,
// THEN the page content's styles update to reflect the selection.
// WHEN I click the "Back" button,
// THEN I am redirected back to the landing page where I can input more blog entries.



// accessing the toggle switch HTML element
const themeSwitcher = document.querySelector('theme-switcher');
const container = document.querySelector('.container');


// set default mode to dark
let mode = 'dark';

// click event on the toggle switch
themeSwitcher.addEventListener('click', function () {

// if mode is on dark, use light background
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute ('class', 'light');
        }
// if mode is on light, use dark background
    else {
        mode = 'dark';
        container.setAttribute('class','dark');
    }
}):
