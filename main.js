const emblem = document.getElementById("emblem")
const btnIco = document.getElementsByClassName("btn-ico")
const btnIco2 = document.getElementsByClassName("btn-ico2")
const randBtn = document.getElementById("random-btn")
const tankBtn = document.getElementById("tank-btn")
const dpsBtn = document.getElementById("DPS-btn")
const meleeBtn = document.getElementById("melee-btn")
const rangedBtn = document.getElementById("ranged-btn")
const magicBtn = document.getElementById("magic-btn")
const healerBtn = document.getElementById("healer-btn")
const dumbassBtn = document.getElementById("all-btn")
const header = document.getElementById("header")
const subHeader = document.getElementById("sub-header")

let currentJob = "?"
let jobType = ""
let jobNum = 0
let randNum = 0
const tankNum = 4
const dpsNum = 11
const meleeNum = 5
const rangedNum = 3
const magicNum = 3
const healerNum = 4
const allNum = 19

function selectingPrep() {
    header.textContent = "Selecting from: "
}
/*while (currentJob !== "?") {
    btnIco.src = src="images/SVG/CommandChange.svg"
    btnIco2.src = src="images/SVG/CommandChange2.svg"
}*/

tankBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = tankNum
    jobType = "Tank"
    header.textContent += "Tank"
})

dpsBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = dpsNum
    jobType = "DPS"
    header.textContent += "Any DPS"
})

meleeBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = meleeNum
    jobType = "Melee"
    header.textContent += "Melee"
})

rangedBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = rangedNum
    jobType = "Ranged"
    header.textContent += "Ranged"
})

magicBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = magicNum
    jobType = "Magic"
    header.textContent += "Magic"
})

healerBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = healerNum
    jobType = "Healer"
    header.textContent += "Healer..."
})

dumbassBtn.addEventListener("click", function() {
    selectingPrep()
    jobNum = allNum
    jobType = "All"
    header.textContent += "All of'em, Dumbass"
})

randBtn.addEventListener("click", function() {
    randomizer(jobNum)
    jobSelector(jobType)
    subHeader.textContent = currentJob
})

function randomizer(type) {
    randNum = Math.floor(Math.random() * type) + 1;
    console.log(randNum)
    
    return randNum

}

//Second solution:
function jobSelector(type) {
    if (type === "Tank") {
        console.log(jobType)
        tankSelector()
    } else if (type === "DPS") {
        console.log(jobType)
        dpsSelector()
    } else if (type === "Melee") {
        console.log(jobType)
        meleeSelector()
    } else if (type === "Ranged") {
        console.log(jobType)
        rangedSelector()
    } else if (type === "Magic") {
        console.log(jobType)
        magicSelector()
    } else if (type === "Healer") {
        console.log(jobType)
        healerSelector()
    } else if (type === "All") {
        console.log(jobType)
        allSelector()
    }
}

function tankSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Warrior"
            emblem.src = src="images/png/Warrior.png"
            break
        case 2:
            currentJob = "Gunbreaker"
            emblem.src = src="images/png/Gunbreaker.png"
            break
        case 3:
            currentJob = "Dark knight"
            emblem.src = src="images/png/DarkKnight.png"
            break
        case 4:
            currentJob = "Paladin"
            emblem.src = src="images/png/Paladin.png"
            break
    }
}

function dpsSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Reaper"
            emblem.src = src="images/png/Reaper.png"
            break
        case 2:
            currentJob = "Samurai"
            emblem.src = src="images/png/Samurai.png"
            break
        case 3:
            currentJob = "Dancer"
            emblem.src = src="images/png/Dancer.png"
            break
        case 4:
            currentJob = "Summoner"
            emblem.src = src="images/png/Summoner.png"
            break
        case 5:
            currentJob = "Dragoon"
            emblem.src = src="images/png/Dragoon.png"
            break
        case 6:
            currentJob = "Machinist"
            emblem.src = src="images/png/Machinist.png"
            break
        case 7:
            currentJob = "Red Mage"
            emblem.src = src="images/png/RedMage.png"
            break
        case 8:
            currentJob = "Ninja"
            emblem.src = src="images/png/Ninja.png"
            break
        case 9:
            currentJob = "Bard"
            emblem.src = src="images/png/Bard.png" 
            break
        case 10:
            currentJob = "Black Mage"
            emblem.src = src="images/png/BlackMage.png"
            break
        case 11:
            currentJob = "間抜け"
            emblem.src = src="images/png/Monk.png" 
            break
    }
}

function meleeSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Reaper"
            emblem.src = src="images/png/Reaper.png"
            break
        case 2:
            currentJob = "Samurai"
            emblem.src = src="images/png/Samurai.png"
            break
        case 3:
            currentJob = "Dragoon"
            emblem.src = src="images/png/Dragoon.png"
            break
        case 4:
            currentJob = "Ninja"
             emblem.src = src="images/png/Ninja.png"
             break
        case 5:
            currentJob = "間抜け"
            emblem.src = src="images/png/Monk.png"
            break
    }
}

function rangedSelector() {
    switch (randNum) {
         case 1:
            currentJob = "Dancer"
            emblem.src = src="images/png/Dancer.png"
            break
        case 2:
            currentJob = "Machinist"
            emblem.src = src="images/png/Machinist.png"
            break
        case 3:
            currentJob = "Bard"
            emblem.src = src="images/png/Bard.png" 
            break
    }
}

function magicSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Summoner"
            emblem.src = src="images/png/Summoner.png"
            break
        case 2:
            currentJob = "Red Mage"
            emblem.src = src="images/png/RedMage.png"
            break
        case 3:
            currentJob = "Black Mage"
            emblem.src = src="images/png/BlackMage.png"
            break
        }
    }

function healerSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Sage"
            emblem.src = src="images/png/Sage.png" 
            break
        case 2:
            currentJob = "White Mage"
            emblem.src = src="images/png/WhiteMage.png"
            break
        case 3:
            currentJob = "Astrologian"
            emblem.src = src="images/png/Astrologian.png"
            break
        case 4:
            currentJob = "Scholar"
            emblem.src = src="images/png/Scholar.png"
            break
        }
}

function allSelector() {
    switch (randNum) {
        case 1:
            currentJob = "Reaper"
            emblem.src = src="images/png/Reaper.png"
            break
        case 2:
            currentJob = "Samurai"
            emblem.src = src="images/png/Samurai.png"
            break
        case 3:
            currentJob = "Dancer"
            emblem.src = src="images/png/Dancer.png"
            break
        case 4:
            currentJob = "Summoner"
            emblem.src = src="images/png/Summoner.png"
            break
        case 5:
            currentJob = "Dragoon"
            emblem.src = src="images/png/Dragoon.png"
            break
        case 6:
            currentJob = "Machinist"
            emblem.src = src="images/png/Machinist.png"
            break
        case 7:
            currentJob = "Red Mage"
            emblem.src = src="images/png/RedMage.png"
            break
        case 8:
            currentJob = "Ninja"
            emblem.src = src="images/png/Ninja.png"
            break
        case 9:
            currentJob = "Bard"
            emblem.src = src="images/png/Bard.png" 
            break
        case 10:
            currentJob = "Black Mage"
            emblem.src = src="images/png/BlackMage.png"
            break
        case 11:
            currentJob = "間抜け"
            emblem.src = src="images/png/Monk.png" 
            break
        case 12:
            currentJob = "Sage"
            emblem.src = src="images/png/Sage.png" 
            break
        case 13:
            currentJob = "White Mage"
            emblem.src = src="images/png/WhiteMage.png"
            break
        case 14:
            currentJob = "Astrologian"
            emblem.src = src="images/png/Astrologian.png"
            break
        case 15:
            currentJob = "Scholar"
            emblem.src = src="images/png/Scholar.png"
            break
        case 16:
            currentJob = "Warrior"
            emblem.src = src="images/png/Warrior.png"
            break
        case 17:
            currentJob = "Gunbreaker"
            emblem.src = src="images/png/Gunbreaker.png"
            break
        case 18:
            currentJob = "Dark knight"
            emblem.src = src="images/png/DarkKnight.png"
            break
        case 19:
            currentJob = "Paladin"
            emblem.src = src="images/png/Paladin.png"
            break
    }
}

// First solution:
// function jobSelector (type) {
//     if (type === "Tank") {
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Warrior"
//             emblem.src = src="images/png/Warrior.png"
//         } else if (randNum === 2) {
//             currentJob = "Gunbreaker"
//             emblem.src = src="images/png/Gunbreaker.png"
//         } else if (randNum === 3) {
//             currentJob = "Dark knight"
//             emblem.src = src="images/png/DarkKnight.png"
//         } else if (randNum === 4) {
//             currentJob = "Paladin"
//             emblem.src = src="images/png/Paladin.png"
//         } else {
//             return "Error"
//         }
//     } else if (type === "DPS") {  
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Reaper"
//             emblem.src = src="images/png/Reaper.png"
//         } else if (randNum === 2) {
//             currentJob = "Samurai"
//             emblem.src = src="images/png/Samurai.png"
//         } else if (randNum === 3) {
//             currentJob = "Dancer"
//             emblem.src = src="images/png/Dancer.png"
//         } else if (randNum === 4) {
//             currentJob = "Summoner"
//             emblem.src = src="images/png/Summoner.png"
//         }  else if (randNum === 5) {
//             currentJob = "Dragoon"
//             emblem.src = src="images/png/Dragoon.png"
//         }  else if (randNum === 6) {
//             currentJob = "Machinist"
//             emblem.src = src="images/png/Machinist.png"
//         }  else if (randNum === 7) {
//             currentJob = "Red Mage"
//             emblem.src = src="images/png/RedMage.png"
//         }  else if (randNum === 8) {
//             currentJob = "Ninja"
//             emblem.src = src="images/png/Ninja.png"
//         }  else if (randNum === 9) {
//             currentJob = "Bard"
//             emblem.src = src="images/png/Bard.png" 
//         }  else if (randNum === 10) {
//             currentJob = "Black Mage"
//             emblem.src = src="images/png/BlackMage.png"
//         }  else if (randNum === 11) {
//             currentJob = "間抜け"
//             emblem.src = src="images/png/Monk.png" 
//         }  else {
//             return "Error"
//         } 
//     } else if (type === "Melee") {
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Reaper"
//             emblem.src = src="images/png/Reaper.png"
//         } else if (randNum === 2) {
//             currentJob = "Samurai"
//             emblem.src = src="images/png/Samurai.png"
//         } else if (randNum === 3) {
//             currentJob = "Dragoon"
//             emblem.src = src="images/png/Dragoon.png"
//         } else if (randNum === 4) {
//             currentJob = "Ninja"
//             emblem.src = src="images/png/Ninja.png"
//         }  else if (randNum === 5) {
//             currentJob = "間抜け"
//             emblem.src = src="images/png/Monk.png"
//         } else {
//             return "Error"
//         } 
//     } else if (type === "Ranged") {
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Dancer"
//             emblem.src = src="images/png/Dancer.png"
//         } else if (randNum === 2) {
//             currentJob = "Machinist"
//             emblem.src = src="images/png/Machinist.png"
//         } else if (randNum === 3) {
//             currentJob = "Bard"
//             emblem.src = src="images/png/Bard.png" 
//         } else {
//             return "Error"
//         } 
//     } else if (type = "Magic") {
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Summoner"
//             emblem.src = src="images/png/Summoner.png"
//         } else if (randNum === 2) {
//             currentJob = "Red Mage"
//             emblem.src = src="images/png/RedMage.png"
//         } else if (randNum === 3) {
//             currentJob = "Black Mage"
//             emblem.src = src="images/png/BlackMage.png"
//         } else {
//             return "Error"
//         } 
//     } else if (type === "Healer") {
//         console.log(jobType)
//         if (randNum === 1) {
//             currentJob = "Sage"
//             emblem.src = src="images/png/Sage.png" 
//         } else if (randNum === 2) {
//             currentJob = "White Mage"
//             emblem.src = src="images/png/WhiteMage.png"
//         } else if (randNum === 3) {
//             currentJob = "Astrologian"
//             emblem.src = src="images/png/Astrologian.png"
//         } else if (randNum === 4) {
//             currentJob = "Scholar"
//             emblem.src = src="images/png/Scholar.png"
//         } else {
//             return "Error"
//         } 
//     } else if (type === "All") {
//         if (randNum === 1) {
//             currentJob = "Reaper"
//             emblem.src = src="images/png/Reaper.png"
//         } else if (randNum === 2) {
//             currentJob = "Samurai"
//             emblem.src = src="images/png/Samurai.png"
//         } else if (randNum === 3) {
//             currentJob = "Dancer"
//             emblem.src = src="images/png/Dancer.png"
//         } else if (randNum === 4) {
//             currentJob = "Summoner"
//             emblem.src = src="images/png/Summoner.png"
//         }  else if (randNum === 5) {
//             currentJob = "Dragoon"
//             emblem.src = src="images/png/Dragoon.png"
//         }  else if (randNum === 6) {
//             currentJob = "Machinist"
//             emblem.src = src="images/png/Machinist.png"
//         }  else if (randNum === 7) {
//             currentJob = "Red Mage"
//             emblem.src = src="images/png/RedMage.png"
//         }  else if (randNum === 8) {
//             currentJob = "Ninja"
//             emblem.src = src="images/png/Ninja.png"
//         }  else if (randNum === 9) {
//             currentJob = "Bard"
//             emblem.src = src="images/png/Bard.png" 
//         }  else if (randNum === 10) {
//             currentJob = "Black Mage"
//             emblem.src = src="images/png/BlackMage.png"
//         }  else if (randNum === 11) {
//             currentJob = "間抜け"
//             emblem.src = src="images/png/Monk.png" 
//         } else if (randNum === 12) {
//             currentJob = "Sage"
//             emblem.src = src="images/png/Sage.png" 
//         } else if (randNum === 13) {
//             currentJob = "White Mage"
//             emblem.src = src="images/png/WhiteMage.png"
//         } else if (randNum === 14) {
//             currentJob = "Astrologian"
//             emblem.src = src="images/png/Astrologian.png"
//         } else if (randNum === 15) {
//             currentJob = "Scholar"
//             emblem.src = src="images/png/Scholar.png"
//         } else if (randNum === 16) {
//             currentJob = "Warrior"
//             emblem.src = src="images/png/Warrior.png"
//         } else if (randNum === 17) {
//             currentJob = "Gunbreaker"
//             emblem.src = src="images/png/Gunbreaker.png"
//         } else if (randNum === 18) {
//             currentJob = "Dark knight"
//             emblem.src = src="images/png/DarkKnight.png"
//         } else if (randNum === 19) {
//             currentJob = "Paladin"
//             emblem.src = src="images/png/Paladin.png"
//         } else {
//             return "Error"
//         } 
//     }
// }