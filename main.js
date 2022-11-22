//Downloaded element from DOM HTML 
const gameElements = document.querySelectorAll("img")
const myChoiceText = document.querySelector(".my-choice span")
const aiChoiceText = document.querySelector(".computer-choice span")
let wins = document.querySelector(".wins span");
let loses = document.querySelector(".loses span");
let totalSum = document.querySelector(".total span");
let spanResult = document.querySelector(".result-text")

// Variables 
let myChoice = "";
let randomIndex = 0;
let aiChoice = "";

// Function to start work and choosing hand 
function choiceHands() {
    //Download the atribute of DOM element and array - our choice
    myChoice = this.getAttribute('value');
    myChoiceText.innerHTML = myChoice;
    // Add and remove class to show our choice by adding class with border section 
    for(let i = 0; i < gameElements.length; i++){
        if(gameElements[i].classList.contains("click")){
            gameElements[i].classList.remove("click")
        }
    }
    this.classList.add("click")
    //Counter to counting number of games
    totalSum.innerHTML++;
     //Calling the function 
    computerChoice()
    showResult()
}



//Function to choosing hand by computer 
function computerChoice () {

    //Getting randoomly number of index of array by Math
    randomIndex = gameElements[Math.floor(Math.random() * gameElements.length)]

    //Download value of computer choosing and addin to variables with text content 
    aiChoice = randomIndex.getAttribute('value')
    aiChoiceText.innerHTML = aiChoice;  
    console.log(randomIndex)
}

//Function which count a result and show them 
function showResult () {
    if(myChoice === "paper" && aiChoice === "stone" || myChoice === "stone" && aiChoice === "scissor" || myChoice === "scissor" && aiChoice === "paper"){
        wins.innerHTML++;
        spanResult.innerText = "You win!:)"
        spanResult.style.color = "green"
    } else if(myChoice === aiChoice){
        spanResult.innerText = "Draw";
        spanResult.style.color = "blue";
        return;
    } else{
        loses.innerHTML++;
        spanResult.innerText = "You lost :("
        spanResult.style.color = "red"
    }
}



gameElements.forEach(item => item.addEventListener("click", choiceHands))







