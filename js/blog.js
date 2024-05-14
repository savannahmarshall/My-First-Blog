const backHome = document.querySelector('#back-button')
const mainContent = document.querySelector('#main-content');

backHome.addEventListener('click', function(event) {
    window.location.href = './index.html';

})

function renderBlogInputs() {
    getBlogInputs();

    for (let i =0; i < totalInputs.length; i++) {
        const input = totalInputs[i];

        const inputBody = document.createElement('div');
        const inputTitle = document.createElement ('p');
        const inputContent = document.createElement ('p');
        const inputuserName = document.createElement ('p');

        mainContent.appendChild(inputBody);
        inputBody.appendChild(inputTitle);
        inputBody.appendChild(inputContent);
        inputBody.appendChild(inputuserName);

        inputBody.setAttribute('class', 'input-body');
        inputTitle.setAttribute('class', 'input-title');
        inputContent.setAttribute('class', 'input-content');
        inputuserName.setAttribute('class', 'input-name');

        inputTitle.textContent = input.title;
        inputContent.textContent = input.content;
        inputuserName.textContent = `Created by: ${input.userName}`;

    };


}

renderBlogInputs();


let lightDark = 'dark';
const lightDarkButton = document.getElementById('light-dark');
const body = document.querySelector('body');

lightDarkButton.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        body.setAttribute('class', 'light');
    } else {
        mode = 'dark';
        body.setAttribute('class', 'dark');
    }
    
})









// // accessing the toggle switch HTML element
// const themeSwitcher = document.querySelector('theme-switcher');
// const container = document.querySelector('.container');


// // set default mode to dark
// let mode = 'dark';

// // click event on the toggle switch
// themeSwitcher.addEventListener('click', function () {

// // if mode is on dark, use light background
//     if (mode === 'dark') {
//         mode = 'light';
//         container.setAttribute ('class', 'light');
//         }
// // if mode is on light, use dark background
//     else {
//         mode = 'dark';
//         container.setAttribute('class','dark');
//     }
// })



