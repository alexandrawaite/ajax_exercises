const pets = document.querySelectorAll('input')
const form = document.querySelectorAll('form')

form.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const petId = form.children[0].attributes.pet_id.value
    const newName = form.children[0].value

    fetch(`/pets/${petId}/update_name`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newName,
      }),
    })
      .then((response) => console.log(response.json()))
  })
})
