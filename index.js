// document.getElementById("count-el").innerText = 10

// let firstBatch = 4
// let secondBatch = 3

// let myage = firstBatch * secondBatch

// console.log(myage)

// let myAge = 20
// let humanDogRatio = 5

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)



// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment() {
//     console.log("Yes! you did it!")
// }

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 2
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

let completedLaps = 5

function CompletingLpas() {
    completedLaps = completedLaps + 5
}

CompletingLpas()
CompletingLpas()


console.log(completedLaps)


// increament count on click

let count = 0
let countEl = document.getElementById("count-el")

// input data store basic practice
let pContent = document.getElementById("content")

function increment() {
    count = count + 1
    countEl.textContent = count
    console.log(count)
    // input data store basic practice
    pContent.innerText = test.value
}

// save on click practice
let savedata = document.getElementById("saveddata")

function save() { 
    console.log(count)
    let countstr = count + ' - '
    savedata.textContent += countstr
    countEl.textContent = 0
    count = 0
}

// practice for string

let username = 'RJ'

let message = 'Your username is RJ'

console.log(username + ',' + message)

let messageToUser = username + ',' + message + '!!'
console.log(messageToUser)


// practice for string with example

let greeting = 'Hello, My name is '
let myname = 'Razi'
let mangreet = greeting + myname +'.'
console.log(mangreet)

// quick examples

console.log( 4 + 5)  // 9
console.log("5" + 4)  // 54
console.log("5" + "2") // 52
console.log(100 + "120") //100120

// render welcome message for practice

let newName = 'Razi'
let mygreeting = 'Hello, Welcome back'
let greetingmessage = 'Hope you are doing well, Continue with you dedicating practice!'

let messagecontent = document.getElementById('welcome-el')

messagecontent.innerText = mygreeting + ', ' + newName + '. ' + greetingmessage

