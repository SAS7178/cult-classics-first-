console.log('Trees')




const birthdays = [`Wilson Bell's birthday is April 28th.`, `Stephen Smith's birthday is March 19th.`, `Robert Parker's birthday is Sept 23rd.`, `Christian Suriano's birthday is Feb 7th.`]
let HTMLstring = ``
for (const person of birthdays) {
    HTMLstring += `<div class="birthday">${person}</div>\n`
}

const parentHTMLElement = document.querySelector("#birthdays")


    parentHTMLElement.innerHTML = HTMLstring