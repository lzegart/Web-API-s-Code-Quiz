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

// questions.q = 
// var choices = 0;
// questions.a = answer

var startBtn = document.querySelector("#start-now");
startBtn.addEventListener("click", function() {
    console.log("I've been clicked")
    var startEl = document.querySelector ("#start-elements");
    
    // questions.forEach()
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i]);
        // display = questions.q[i] 
        // questions.choices
        // questions.a

    }

    // function startQuestions(arr) {
    //     var firstQ = q[0]
    //     var choices = choices
    //     var result = a
    // }
}) 