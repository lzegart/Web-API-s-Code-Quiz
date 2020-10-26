var questions = [
    {
        q: "What is a function?",
        choices: ["1. Any number of characters stored together", "2. A reusable block of code", "3. A collection of data", "4. Something that stores keys and values"],
        a: "2. A reusable block of code",
    },
    {
        q: "How does a while loop work?",
        choices: ["1. It continues until it reaches a true value", "2. It doesn't have a set ending", "3. It happens at least once", "4. All of the above"],
        a: "4. All of the above",
    },
    {
        q: "Which of the following is not a loop?",
        choices: ["1. Array loop", "2. While loop", "3. Do while loop", "4. For loop"],
        a: "1. Array loop",
    },
    {
        q: "ParceInt works by...",
        choices: ["1. Assigning a value", "2. Binding the variable to the lexical scope", "3. Assigning a boolean", "4. Defining and disecting the numbers into a string"],
        a: "4. Defining and disecting the numbers into a string",
    },
    {
        q: "What does var.length represent?",
        choices: ["1. Adding a value to the var", "2. The amount of vars in an array", "3. The length of the var", "4. Assigning a length to the var"],
        a: "2. The amount of vars in an array",
    },
];

var questionsEl = document.querySelector("#questions")
var endEl = document.querySelector("#end-element")
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
        // check answers
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

var inputInitials = document.querySelector("#input-form");
inputInitials.addEventListener("#submit", function(e) {
    e.preventDefault()
    var inputText = input.value;
    console.log(inputText.value)
})

