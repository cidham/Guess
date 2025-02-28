let players = [ { name: "Virat Kohli", continent: "Asia", country: "India", role: "Batsman", hand: "Right", type: "" }, { name: "Rohit Sharma", continent: "Asia", country: "India", role: "Batsman", hand: "Right", type: "" }, { name: "Jasprit Bumrah", continent: "Asia", country: "India", role: "Bowler", hand: "Right", type: "Fast" }, { name: "KL Rahul", continent: "Asia", country: "India", role: "Wicketkeeper", hand: "Right", type: "" }, { name: "Ravindra Jadeja", continent: "Asia", country: "India", role: "Allrounder", hand: "Left", type: "Spin" },
 
{ name: "Steve Smith", continent: "Oceanic", country: "Australia", role: "Batsman", hand: "Right", type: "" }, { name: "David Warner", continent: "Oceanic", country: "Australia", role: "Batsman", hand: "Left", type: "" }, { name: "Pat Cummins", continent: "Oceanic", country: "Australia", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Glenn Maxwell", continent: "Oceanic", country: "Australia", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Alex Carey", continent: "Oceanic", country: "Australia", role: "Wicketkeeper", hand: "Left", type: "" },
 
{ name: "Joe Root", continent: "Europe", country: "England", role: "Batsman", hand: "Right", type: "" }, { name: "Ben Stokes", continent: "Europe", country: "England", role: "Allrounder", hand: "Left", type: "Fast" }, { name: "Jofra Archer", continent: "Europe", country: "England", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Jos Buttler", continent: "Europe", country: "England", role: "Wicketkeeper", hand: "Right", type: "" }, { name: "Moeen Ali", continent: "Europe", country: "England", role: "Allrounder", hand: "Right", type: "Spin" },
 
{ name: "Babar Azam", continent: "Asia", country: "Pakistan", role: "Batsman", hand: "Right", type: "" }, { name: "Shaheen Afridi", continent: "Asia", country: "Pakistan", role: "Bowler", hand: "Left", type: "Fast" }, { name: "Mohammad Rizwan", continent: "Asia", country: "Pakistan", role: "Wicketkeeper", hand: "Right", type: "" }, { name: "Shadab Khan", continent: "Asia", country: "Pakistan", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Fakhar Zaman", continent: "Asia", country: "Pakistan", role: "Batsman", hand: "Left", type: "" },
 
{ name: "Kane Williamson", continent: "Oceanic", country: "New Zealand", role: "Batsman", hand: "Right", type: "" }, { name: "Trent Boult", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Left", type: "Fast" }, { name: "Tim Southee", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Tom Latham", continent: "Oceanic", country: "New Zealand", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Jimmy Neesham", continent: "Oceanic", country: "New Zealand", role: "Allrounder", hand: "Left", type: "Fast" },
 
{ name: "Quinton de Kock", continent: "Africa", country: "South Africa", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Kagiso Rabada", continent: "Africa", country: "South Africa", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Faf du Plessis", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Right", type: "" }, { name: "David Miller", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Left", type: "" }, { name: "Tabraiz Shamsi", continent: "Africa", country: "South Africa", role: "Bowler", hand: "Left", type: "Spin" },
 
{ name: "Chris Gayle", continent: "America", country: "West Indies", role: "Batsman", hand: "Left", type: "" }, { name: "Andre Russell", continent: "America", country: "West Indies", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Jason Holder", continent: "America", country: "West Indies", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Nicholas Pooran", continent: "America", country: "West Indies", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Sunil Narine", continent: "America", country: "West Indies", role: "Allrounder", hand: "Right", type: "Spin" },
 
{ name: "Shikhar Dhawan", continent: "Asia", country: "India", role: "Batsman", hand: "Left", type: "" }, { name: "Hardik Pandya", continent: "Asia", country: "India", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Mohammed Shami", continent: "Asia", country: "India", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Rishabh Pant", continent: "Asia", country: "India", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Suryakumar Yadav", continent: "Asia", country: "India", role: "Batsman", hand: "Right", type: "" },
 
{ name: "Marcus Stoinis", continent: "Oceanic", country: "Australia", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Josh Hazlewood", continent: "Oceanic", country: "Australia", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Aaron Finch", continent: "Oceanic", country: "Australia", role: "Batsman", hand: "Right", type: "" }, { name: "Matthew Wade", continent: "Oceanic", country: "Australia", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Adam Zampa", continent: "Oceanic", country: "Australia", role: "Bowler", hand: "Right", type: "Spin" },
 
{ name: "Sam Curran", continent: "Europe", country: "England", role: "Allrounder", hand: "Left", type: "Fast" }, { name: "Jonny Bairstow", continent: "Europe", country: "England", role: "Wicketkeeper", hand: "Right", type: "" }, { name: "Chris Woakes", continent: "Europe", country: "England", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Jason Roy", continent: "Europe", country: "England", role: "Batsman", hand: "Right", type: "" }, { name: "Mark Wood", continent: "Europe", country: "England", role: "Bowler", hand: "Right", type: "Fast" },
 
{ name: "Mohammad Hafeez", continent: "Asia", country: "Pakistan", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Imad Wasim", continent: "Asia", country: "Pakistan", role: "Allrounder", hand: "Left", type: "Spin" }, { name: "Wahab Riaz", continent: "Asia", country: "Pakistan", role: "Bowler", hand: "Left", type: "Fast" }, { name: "Asif Ali", continent: "Asia", country: "Pakistan", role: "Batsman", hand: "Right", type: "" }, { name: "Haris Rauf", continent: "Asia", country: "Pakistan", role: "Bowler", hand: "Right", type: "Fast" },
 
{ name: "Ross Taylor", continent: "Oceanic", country: "New Zealand", role: "Batsman", hand: "Right", type: "" }, { name: "Lockie Ferguson", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Ish Sodhi", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Right", type: "Spin" }, { name: "Colin de Grandhomme", continent: "Oceanic", country: "New Zealand", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Mitchell Santner", continent: "Oceanic", country: "New Zealand", role: "Allrounder", hand: "Left", type: "Spin" },
 
{ name: "Aiden Markram", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Right", type: "" }, { name: "Rassie van der Dussen", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Right", type: "" }, { name: "Anrich Nortje", continent: "Africa", country: "South Africa", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Dwaine Pretorius", continent: "Africa", country: "South Africa", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Heinrich Klaasen", continent: "Africa", country: "South Africa", role: "Wicketkeeper", hand: "Right", type: "" },
 
//India
{ name: "Shubman Gill", continent: "Asia", country: "India", role: "Batsman", hand: "Right", type: "" }, { name: "Yuzvendra Chahal", continent: "Asia", country: "India", role: "Bowler", hand: "Right", type: "Spin" }, { name: "Deepak Chahar", continent: "Asia", country: "India", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Axar Patel", continent: "Asia", country: "India", role: "Allrounder", hand: "Left", type: "Spin" }, { name: "Prithvi Shaw", continent: "Asia", country: "India", role: "Batsman", hand: "Right", type: "" },
 
// Australia 
{ name: "Steve Smith", continent: "Oceanic", country: "Australia", role: "Batsman", hand: "Right", type: "" }, { name: "Mitchell Starc", continent: "Oceanic", country: "Australia", role: "Bowler", hand: "Left", type: "Fast" }, { name: "Pat Cummins", continent: "Oceanic", country: "Australia", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Marnus Labuschagne", continent: "Oceanic", country: "Australia", role: "Batsman", hand: "Right", type: "" }, { name: "Alex Carey", continent: "Oceanic", country: "Australia", role: "Wicketkeeper", hand: "Left", type: "" },
 
// England 
{ name: "Joe Root", continent: "Europe", country: "England", role: "Batsman", hand: "Right", type: "" }, { name: "Ben Stokes", continent: "Europe", country: "England", role: "Allrounder", hand: "Left", type: "Fast" }, { name: "Jos Buttler", continent: "Europe", country: "England", role: "Wicketkeeper", hand: "Right", type: "" }, { name: "Dawid Malan", continent: "Europe", country: "England", role: "Batsman", hand: "Left", type: "" }, { name: "Jofra Archer", continent: "Europe", country: "England", role: "Bowler", hand: "Right", type: "Fast" },
 
// Pakistan
{ name: "Babar Azam", continent: "Asia", country: "Pakistan", role: "Batsman", hand: "Right", type: "" }, { name: "Shaheen Afridi", continent: "Asia", country: "Pakistan", role: "Bowler", hand: "Left", type: "Fast" }, { name: "Shadab Khan", continent: "Asia", country: "Pakistan", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Shoaib Malik", continent: "Asia", country: "Pakistan", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Sarfaraz Ahmed", continent: "Asia", country: "Pakistan", role: "Wicketkeeper", hand: "Right", type: "" },
 
// New Zealand 
{ name: "Martin Guptill", continent: "Oceanic", country: "New Zealand", role: "Batsman", hand: "Right", type: "" }, { name: "Tim Southee", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Tom Latham", continent: "Oceanic", country: "New Zealand", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Jimmy Neesham", continent: "Oceanic", country: "New Zealand", role: "Allrounder", hand: "Left", type: "Fast" }, { name: "Trent Boult", continent: "Oceanic", country: "New Zealand", role: "Bowler", hand: "Left", type: "Fast" },
 
// South Africa 
{ name: "David Miller", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Left", type: "" }, { name: "Kagiso Rabada", continent: "Africa", country: "South Africa", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Quinton de Kock", continent: "Africa", country: "South Africa", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Lungi Ngidi", continent: "Africa", country: "South Africa", role: "Bowler", hand: "Right", type: "Fast" }, { name: "Temba Bavuma", continent: "Africa", country: "South Africa", role: "Batsman", hand: "Right", type: "" },
 
// Afghanistan
{ name: "Rashid Khan", continent: "Asia", country: "Afghanistan", role: "Bowler", hand: "Right", type: "Spin" }, { name: "Mohammad Nabi", continent: "Asia", country: "Afghanistan", role: "Allrounder", hand: "Right", type: "Spin" }, { name: "Mujeeb Ur Rahman", continent: "Asia", country: "Afghanistan", role: "Bowler", hand: "Right", type: "Spin" }, { name: "Hazratullah Zazai", continent: "Asia", country: "Afghanistan", role: "Batsman", hand: "Left", type: "" }, { name: "Asghar Afghan", continent: "Asia", country: "Afghanistan", role: "Batsman", hand: "Right", type: "" },
 
// West Indies 
{ name: "Chris Gayle", continent: "America", country: "West Indies", role: "Batsman", hand: "Left", type: "" }, { name: "Dwayne Bravo", continent: "America", country: "West Indies", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Kieron Pollard", continent: "America", country: "West Indies", role: "Allrounder", hand: "Right", type: "Fast" }, { name: "Nicholas Pooran", continent: "America", country: "West Indies", role: "Wicketkeeper", hand: "Left", type: "" }, { name: "Shimron Hetmyer", continent: "America", country: "West Indies", role: "Batsman", hand: "Left", type: "" } ];

let selectedPlayer = players[Math.floor(Math.random() * players.length)];
let level = parseInt(sessionStorage.getItem("level")) || 1;
let guesses = getGuessesByLevel(level);
document.getElementById("guessesLeft").innerText = `Guesses Left: ${guesses}`;

function getGuessesByLevel(level) {
    if (level >= 1 && level <= 10) return 15;
    if (level >= 11 && level <= 15) return 12;
    if (level >= 16 && level <= 20) return 10;
    if (level >= 21 && level <= 25) return 8;
    return 15;
}

function makeGuess(type) {
    let guessValue = "";
    if (type === 'continent') guessValue = document.getElementById("continent").value;
    if (type === 'country') guessValue = document.getElementById("country").value;
    if (type === 'role') guessValue = document.getElementById("role").value;
    if (type === 'hand') guessValue = document.getElementById("hand").value;
    if (type === 'type') guessValue = document.getElementById("type").value;
    if (type === 'name') guessValue = document.getElementById("playerName").value.toLowerCase();

    if (guessValue !== "") {
        guesses--;
        document.getElementById("guessesLeft").innerText = `Guesses Left: ${guesses}`;

        let result = guessValue + ": ";
        if ((type === 'continent' && guessValue === selectedPlayer.continent) ||
            (type === 'country' && guessValue === selectedPlayer.country) ||
            (type === 'role' && guessValue === selectedPlayer.role) ||
            (type === 'hand' && guessValue === selectedPlayer.hand) ||
            (type === 'type' && guessValue === selectedPlayer.type) ||
            (type === 'name' && selectedPlayer.name.toLowerCase().includes(guessValue))) {
            result += "<span class='correct'>Yes</span>";
            document.getElementById("clueList").innerHTML += `<p>${result}</p>`;
        } else {
            result += "<span class='wrong'>No</span>";
            document.getElementById("clueList").innerHTML += `<p>${result}</p>`;
        }

        if (type === 'name' && selectedPlayer.name.toLowerCase().includes(guessValue)) {
            showDialog(`Congrats! You are right. You have unlocked the next level.`);
            unlockNextLevel();
            return;
        }

        if (guesses === 0) {
            showDialog(`Better luck next time! The player was ${selectedPlayer.name}.`);
            setTimeout(() => {
                window.location.href = "levels.html";
            }, 2000);
        }
    }
}

function showDialog(message) {
    let dialog = document.createElement("div");
    dialog.className = "dialog-box";
    dialog.innerHTML = `<p>${message}</p><button onclick="closeDialog()">OK</button>`;
    document.body.appendChild(dialog);
    dialog.style.display = "block";
}

function closeDialog() {
    let dialog = document.querySelector(".dialog-box");
    if (dialog) {
        dialog.style.display = "none";
        dialog.remove();
    }
}

function unlockNextLevel() {
    sessionStorage.setItem("level", level + 1);
    setTimeout(() => {
        window.location.href = "levels.html";
    }, 2000);
}