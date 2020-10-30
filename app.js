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

    var timer = window.setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount

        if (timerCount <= 0) {
            timerCount = 0;
            timerEl.textContent = 0;
            clearInterval(timer)
            alert("Time is up!")
        } else if (finishedQ) {
            currentHighScore = timerCount
            clearInterval(timer)
            console.log(currentHighScore)
            spanScoreEl.textContent = currentHighScore
        }
    }, 1000)

    var startEl = document.querySelector("#start-element")
    startEl.classList.add("hide");
    questionsEl.classList.remove("hide");

    displayQuestion()
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


}

var feedbackEl = document.querySelector("#answer-eval")

var choicesList = document.querySelector("#choices")
choicesList.addEventListener("click", function (event) {
    //console.log(event)
    var eventChoice = event.target
    //console.log(eventChoice)
    console.log(eventChoice.innerText === questions[currentQ].a)
    if (eventChoice.innerText !== questions[currentQ].a) {
        timerCount -= 10;
        // if (timerCount < 0) {
        //     timerCount = 0;
        // }
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }
    // document.querySelector("#feedback-element").setAttribute("class", "show")
    currentQ += 1;

    setTimeout(function () {
        // document.querySelector("#feedback-element").setAttribute("class", "hide")
        if (questions.length > currentQ) {
            displayQuestion()
        } else {
            console.log("finished")
            questionsEl.classList.add("hide");
            endEl.classList.remove("hide");
            finishedQ = true
        }
    }, 1000);
    // }
})

var inputText = document.querySelector("#input-form");
var submitInitials = document.querySelector("#submit");

var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
var newScore = {
    score: time
};


submitInitials.addEventListener("click", function () {
    var newScoreObj = {
        "inititals": inputText.value,
        "score": timerCount
    }
    highScores.push(newScoreObj)
    //console.log(inputText.value)
    window.localStorage.setItem("highScores", JSON.stringify(highScores))
    // window.localStorage.setItem("initials", JSON.stringify(inputText.value));
    // window.localStorage.setItem("score", JSON.stringify(currentHighScore))
    // console.log(currentHighScore)
})

var highScoreList = document.querySelector("#high-score-btn")
highScoreList.addEventListener("click", function (event) {
    // console.log("scores")
    // alert(highScoreList)
    // window.localStorage.getItem("initials", JSON.stringify(inputText.value));
    // window.localStorage.getItem("score", JSON.stringify(currentHighScore));
 
    var highScoresArray = JSON.parse(window.localStorage.getItem("highScores")) || [];
    console.log(highScoresArray)

    // TODO: use a for loop to display all the scores and append them to the html
})