let initialHome = 0
let initialAway = 0

document.getElementById("home-score").textContent = initialHome
document.getElementById("away-score").textContent = initialAway

function addOneHome() {
    initialHome += 1
    document.getElementById("home-score").textContent = initialHome
}
function addTwoHome() {
    initialHome += 2
    document.getElementById("home-score").textContent = initialHome
}
function addThreeHome() {
    initialHome += 3
    document.getElementById("home-score").textContent = initialHome
}

function addOneAway() {
    initialAway += 1
    document.getElementById("away-score").textContent = initialAway
}
function addTwoAway() {
    initialAway += 2
    document.getElementById("away-score").textContent = initialAway
}
function addThreeAway() {
    initialAway += 3
    document.getElementById("away-score").textContent = initialAway
}

function resetHome() {
    initialHome = 0
    document.getElementById("home-score").textContent = initialHome
}
function resetAway() {
    initialAway = 0
    document.getElementById("away-score").textContent = initialAway
}
function resetAll() {
    initialHome = 0
    initialAway = 0
    document.getElementById("home-score").textContent = initialHome
    document.getElementById("away-score").textContent = initialAway
}


