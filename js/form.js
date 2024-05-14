const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const emptyParagraph = document.querySelector('#paragraph');
function displayMessage(type, message) {
    emptyParagraph.textContent = message;
}

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
      // create blogInfo object from submission
        let blogInfo = {
            userName: nameInput.value.trim(),
            title: titleInput.value.trim(),
            content: contentInput.value.trim(),
        }
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




