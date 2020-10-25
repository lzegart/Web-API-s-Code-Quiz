// var questionList = document.getElementById(questionList) 
// // var event = prompt(questionList)
// var startNowEl = document.getElementById("start-element")
//     startNowEl.addEventListener("click", function(event){
//         // console.log("Starting...")
//         console.log(event.target.textContent)
//     })
 

var timerCount = 50
var timerEl = document.querySelector("#time")

timerEl.textContent = timerCount

var timer = window.setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount

    if (timerCount === 0) {
        clearInterval(timer)
    }
}, 500)