console.log('Trees')

const data = {
    pets: [
        {
        name: "wilson",
        pet: "skink"
        },
        {
        name: "Stephen",
        pet: "dog"
        },
    ]
}
const teamPets = (name, pet) => {
    let htmlString = '<article class="petList">'
     htmlString += `${name} has a pet named ${pet}`
     htmlString += `</article`
     return htmlString
}

const parentHTMLElement = document.querySelector("#teampets")


parentHTMLElement.innerHTML = teamPets()