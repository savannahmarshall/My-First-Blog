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
    if (lightDark === 'dark') {
        lightDark = 'light';
        body.setAttribute('class', 'light');
    } else {
        lightDark = 'dark';
        body.setAttribute('class', 'dark');
    }
    
})



