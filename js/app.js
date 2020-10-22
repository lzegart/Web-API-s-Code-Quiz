var buttonListEl = document.getElementById("buttonList")
    buttonListEl.addEventListener("click", function(event){
        console.log("Hiiii")
        console.log(event.target.textContent)
    })