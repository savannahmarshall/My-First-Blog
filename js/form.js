const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const emptyParagraph = document.querySelector('#paragraph');


function displayMessage(type, message) {
    emptyParagraph.textContent = message;
}
  // create blogInfo object from submission
  const blogInfo = {
    userName: nameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // Get stored inputs from localStorage
  let totalInputs = JSON.parse(localStorage.getItem('totalInputs')) || [];
  function storeInputs(blogInfo) {
  totalInputs.push(blogInfo);
  localStorage.setItem('totalInputs', JSON.stringify(totalInputs));
    }

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (blogInfo.userName === '') {
        displayMessage('error', 'Username cannot be blank');
      } else if (blogInfo.title === '') {
        displayMessage('error', 'Blog title cannot be blank');
      } else if (blogInfo.content === '') {
        displayMessage('error', 'Blog content cannot be blank');
      } else {
        storeInputs(blogInfo);
        window.location.href = './blog.html';
      }

  
});

