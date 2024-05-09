const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const emptyParagraph = document.querySelector('#idHere');

const inputs = [];

function displayMessage(message) {
    msgDiv.textContent = message;
    emptyParagraph.textContent = message;
}
  // create blogInfo object from submission
  const blogInfo = {
    userName: nameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (nameInput === '') {
        displayMessage('error', 'Username cannot be blank');
      } else if (titleInput === '') {
        displayMessage('error', 'Blog title cannot be blank');
      } else { (contentInput === '') 
        displayMessage('error', 'Blog content cannot be blank');
    }

  }

  // set new submission to local storage
  localStorage.setItem('blogInfo', JSON.stringify(blogInfo));

  storeInputs(inputs);
  window.location.href = './blog.html';

});







function init() {
    // Get stored inputs from localStorage
    const inputs = JSON.parse(localStorage.getItem('inputs'));
  
    // If inputs were retrieved from localStorage, update the inputs array to it
    if (storedInputs !== null) {
      inputs = storedInputs;
    }
    //Renders inputs to the DOM
    renderInputs();

}

function storeInputs() {
    // Stringify and set key in localStorage to inputs array
    localStorage.setItem('inputs', JSON.stringify(inputs));
  }

  //Add submit event to form
inputsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const inputText = inputInput.value.trim();

    if(inputText === '') {
        return;
    }
})

