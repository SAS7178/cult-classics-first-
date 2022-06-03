console.log('Trees')

//created a nested object to store the data of my teammates
const data = {
    pets: [
        {
        name: "Wilson",
        type: "skink",
        pet: "Hephaestus"
        },
        {
        name: "Stephen",
        type: "dog",
        pet: "Maggie"
        },
        {
        name: "Robert",
        type: "pair of dogs",
        pet: "Ash & Brisco"
        },
        {
        name: "Christian",
        type: "dog",
        pet: "Buster<3"
        }
    ]
}
//hello squirrel
//create a function to iterate through my data and interpolate the key values into html
const teamPets = () => {
    let htmlString = '<article class="petList">\n'
    for (const list of data.pets) {
     htmlString += `<div class="pet">${list.name} has a ${list.type} named ${list.pet}</div>\n`
     }
     htmlString += `</article`
     return htmlString
}
//captured the return value of teamPets
const ourPets = teamPets()

const parentHTMLElements = document.querySelector("#teamPets")

parentHTMLElements.innerHTML = ourPets



const birthdays = [`Wilson Bell's birthday is April 28th.`, `Stephen Smith's birthday is March 19th.`, `Robert Parker's birthday is Sept 23rd.`, `Christian Suriano's birthday is Feb 7th.`]
let HTMLstring = ``
for (const person of birthdays) {
    HTMLstring += `<div class="birthday">${person}</div>\n`
}

const parentHTMLElement = document.querySelector("#birthdays")


    parentHTMLElement.innerHTML = HTMLstring
