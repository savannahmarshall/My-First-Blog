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
        const inputuserName = document.createElement ('p');
        const inputTitle = document.createElement ('p');
        const inputContent = document.createElement ('p');

        mainContent.appendChild(inputBody);
        inputBody.appendChild(inputuserName);
        inputBody.appendChild(inputTitle);
        inputBody.appendChild(inputContent);

        inputBody.setAttribute('class', 'input-body');
        inputuserName.setAttribute('class', 'input-name');
        inputTitle.setAttribute('class', 'input-title');
        inputContent.setAttribute('class', 'input-content');

        inputuserName.textContent = input.userName;
        inputTitle.textContent = input.title;
        inputContent.textContent = input.content;

    };


}

renderBlogInputs();




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



