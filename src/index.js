const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector(".btn")

  button.addEventListener('click', function(e){
    const fullName = document.querySelector("#fullname")
    const email = document.querySelector("#email")
    const street = document.querySelector("#street")
    const city = document.querySelector("#city")
    const state = document.querySelector("#state")
    const postcode = document.querySelector("#postcode")
    const phone = document.querySelector("#phone")
    const cell = document.querySelector("#cell")
    const dateOfBirth = document.querySelector("#date_of_birth")

    e.preventDefault

    console.log("HERE")

    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then(function(json){
        const user = json.results[0]
        fullName.innerText = user.name.first + ' ' + user.name.last
        email.innerText = user.email
        street.innerText = user.location.street
        city.innerText = user.location.city
        state.innerText = user.location.state
        postcode.innerText = user.location.postcode
        phone.innerText = user.phone
        cell.innerText = user.cell
        dateOfBirth.innerText = user.dob.date
      });
    })
})
