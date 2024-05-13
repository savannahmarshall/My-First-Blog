//   Get stored inputs from localStorage
let totalInputs = JSON.parse(localStorage.getItem('totalInputs')) || [];
function storeInputs(blogInfo) {
totalInputs.push(blogInfo);
localStorage.setItem('totalInputs', JSON.stringify(totalInputs));
 }


    //Get landing page inputs from local storage
function getBlogInputs() {
 return JSON.parse(localStorage.getItem('totalInputs')) || [];
 }