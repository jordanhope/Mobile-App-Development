function hello(button) {
    var helloGoodByeButton = document.getElementById("helloGoodByeButton");
    var helloGoodByeBox = document.getElementById("helloGoodByeBox");
    console.log(helloGoodByeBox);
    if (helloGoodByeBox === null) {
        var helloGoodByeBox = document.createElement("div");
        helloGoodByeBox.id = "helloGoodByeBox";
        document.body.appendChild(helloGoodByeBox);
    }
    console.log(helloGoodByeBox);
    if (button.dataset.state === "unclicked") {
        
        button.dataset.state = "clicked";
        helloGoodByeBox.innerHTML = "Hello World";
    }

    else if (button.dataset.state === "clicked") {
        button.dataset.state = "unclicked";
        helloGoodByeBox.innerHTML = "Good Bye World";
        setTimeout(function(){
            helloGoodByeBox.remove();
        }, 500);
    } 
    
}

/*
    EXAMPLES OF
 
    conditional statements 
    variables 
    parameters
    DOM manipulation createElement, appendChild, remove
*/