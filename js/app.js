var startBtn = document.querySelector("#start-now")
startBtn.addEventListener("click", function () { 

var timerCount = 50
var timerEl = document.querySelector("#time")

timerEl.textContent = timerCount

var timer = window.setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount

    if (timerCount === 0) {
        clearInterval(timer)
        alert("Time is up!")
    } 
}, 1000)

})

var inputInitials = document.querySelector("#input-form");
inputInitials.addEventListener("#submit", function(e) {
    e.preventDefault()
    var inputText = input.value;
    console.log(inputText.value)
})