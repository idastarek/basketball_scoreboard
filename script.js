let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

// initiating the scores values for home and guest
let countHome = 0;
let countGuest = 0;

// function to add points to the scores tables, based on two variables - number and team
function addPoints(num, team) {
    console.log(`Add ${num} points for ${team}`);
    if (team === "home") {
        countHome += num;
        scoreHome.textContent = countHome; 
    } else {
        countGuest += num;
        scoreGuest.textContent = countGuest;
    }
}
