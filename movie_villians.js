const movieBadGuys = ["Johnny Lawrence", "The Joker", "Freddy Krueger", "Lord Voldemort", "Darth Vader", "Palpatine", "Bane", "Jigsaw", "Doctor Evil", "The Blob", "Cujo", "Jabba the Hutt", "Ivan Drago", "Biff Tannen", "Professor Severus Snape", "Johnny Ringo", "Beetlejuice"]

// TODO: Iterate the above array of movie villains and for each character with names less than 12 characters, log their name to the console

// movieBadGuys.forEach(badGuy => {
//     if (badGuy.length < 12) {
//         console.log(badGuy)
//     }
// })

//or 

// for (i = 0; i < movieBadGuys.length; i++) {
//     if (movieBadGuys[i].length < 12) {
//         console.log(movieBadGuys[i])
//     }
// }

// TODO: Iterate the array of movie villains and for each character with names less than 12 characters AND contain more than one word, log their name to the console

// movieBadGuys.forEach(badGuy => {
//     if (badGuy.length < 12 && badGuy.includes(" ")) {
//         console.log(badGuy)
//     }
// })


// TODO: Iterate the array of movie villains and for each character with names greater than 8 characters AND DO NOT contain more than one word, push their name into a new array and log that new array in the console.

const badGuysWithOneName = []

movieBadGuys.forEach(badGuy => {
    if (badGuy.length > 8 && !badGuy.includes(" ")) {
        badGuysWithOneName.push(badGuy)
    }
})

console.log(badGuysWithOneName)