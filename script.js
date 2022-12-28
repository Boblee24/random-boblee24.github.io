const quotes = document.querySelector('h1')
const author = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', generate)

function generate(){
    let quotesArray = ["I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.", 'When we have respect for ourselves and others, we gravitate towards connections that encourage that.', 'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful', "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot." ]
    let authorArray = ['Ray Kroc', 'Simeon Lindstrom', 'L. R. Ellert', 'Wayne Gretzky']
    let number = Math.floor(Math.random() * quotesArray.length)
    quotes.textContent = `"${quotesArray[number]}"`
    author.textContent = `-${authorArray[number]}`

}

// function generateObj(){
//     let quotesObject = {'Ray Kroc': '"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."',
//     'Simeon Lindstrom': "'When we have respect for ourselves and others, we gravitate towards connections that encourage that.'",
//     'L. R. Ellert' : "'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful'"
// }
// let authorArrayObj = Object.keys(quotesObject)
// console.log(authorArrayObj)
// let authorObj = authorArrayObj[Math.floor(Math.random() * authorArrayObj.length)]
// console.log(authorObj)
// let quotesObj = quotesObject[authorObj]
// console.log(quotesObj)
// }
// generateObj()