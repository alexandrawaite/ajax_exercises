// Put event handler on form
// call a function to make a fetch call
// update the DOM

// Prevent default (if it's a form)
// Decide where to display the text

// write ajax code here

const answer = document.getElementById('answer')

document.getElementById('question-form').addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submitted!')
  fetch('/magic8response')
    .then(response => response.text())
    .then(prediction => {
      answer.innerHTML = prediction
    })
})
