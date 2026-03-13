//This is where we create the interactivity for our little color game

//1. select all the htmk elements so that we can later manipulate them
const body = document.querySelector('body')
const colorInput = document.getElementById('color-picker')
const colorDiv = document.querySelector('.color-div')
const hiddenText = document.querySelector('.color-div p')
const resetBtn = document.querySelector('.color-div button')
const playBtn = document.getElementById('play-game')

//2. create the functions
function playGame(){
    // this function enables the play of the game by showing the color selector input
    colorDiv.style.display ="block"
    playBtn.style.display ="none"
}

function changeColor(){
    // take the users selected color then change the bg of the website
    const selectedColor = colorInput.value
    body.style.background = selectedColor
    resetBtn.style.display ="block"
    hiddenText.style.display ="block"
    colorInput.style.display ="none"

}
 function resetColor (){
    body.style.background = "#fff3e2"
    colorInput.style.display ="block"
    playBtn.style.display="block"
    resetBtn.style.display ="none"
    hiddenText.style.display ="none"
    colorDiv.style.display ="none"

 }

// is to assign the functions to the button by adding them function call to the actual elements (done above in the html code)