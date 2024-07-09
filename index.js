let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("guest-score") 

let homeCount = 0
let guestCount = 0

function addOneHome(){
    console.log("you added one!")
    homeCount += 1
    homeScore.innerText = homeCount
}

function addTwoHome(){
    console.log("you added two!")
    homeCount+= 2
    homeScore.innerText = homeCount
}

function addThreeHome(){
    console.log("you added three!")
    homeCount+= 3
    homeScore.innerText = homeCount
}


function addOneGuest(){
    console.log("you added one!")
    guestCount += 1
    guestScore.innerText = guestCount
}


function addTwoGuest(){
    console.log("you added two!")
    guestCount += 2
    guestScore.innerText = guestCount
}


function addThreeGuest(){
    console.log("you added three!")
    guestCount += 3
    guestScore.innerText = guestCount
}
