var questionsEl = document.querySelector("#questions")
var endEl = document.querySelector("#end-element")
var spanScoreEl = document.querySelector("#score")
var finishedQ = false 
var currentHighScore = 0
var timerCount = 50

// function with timer, show questions and hide start-element
var startBtn = document.querySelector("#start-now")
startBtn.addEventListener("click", function () { 

    var timerEl = document.querySelector("#time")

    timerEl.textContent = timerCount

    var timer = window.setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount

        if (timerCount === 0) {
            clearInterval(timer)
            alert("Time is up!")
        } else if (finishedQ) {
            currentHighScore = timerCount
            clearInterval(timer)
            console.log(currentHighScore)
            spanScoreEl.textContent = currentHighScore
        }
    }, 1000)

    var startEl  = document.querySelector("#start-element")
    startEl.classList.add("hide");
    questionsEl.classList.remove("hide");

    displayQuestion()
    // for (let i = 0; i < questions.length; i++) {

    // }
})

var currentQ = 0

function displayQuestion() {
    var questionTitleEl = document.querySelector("#question-title")
    questionTitleEl.textContent = questions[currentQ].q
    var option0El = document.querySelector("#option0")
    option0El.textContent = questions[currentQ].choices[0]
    var option1El = document.querySelector("#option1")
    option1El.textContent = questions[currentQ].choices[1]
    var option2El = document.querySelector("#option2")
    option2El.textContent = questions[currentQ].choices[2]
    var option3El = document.querySelector("#option3")
    option3El.textContent = questions[currentQ].choices[3]

    currentQ +=1
}

var choicesList = document.querySelector("#choices")
choicesList.addEventListener("click", function(event) {
    console.log(event)
    var eventChoice = event.target
    console.log(eventChoice.matches("button"))
    if (eventChoice.matches("button")) {
        // if ()
        if (questions.length > currentQ) {
            displayQuestion() 
        } else {
            console.log("finished")
            questionsEl.classList.add("hide");
            endEl.classList.remove("hide");
            finishedQ = true
        }        
    }
})

// var initialsChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var userInitials = [];
var inputText = document.querySelector("#input-form");
var submitInitials = document.querySelector("#submit");
// userInitials.push(initialsChoices)

submitInitials.addEventListener("click", function() {
    // e.preventDefault()
    console.log(inputText.value)
    // localStorage.setItem("initials", input.val());
})

