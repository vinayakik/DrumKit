
// To read the keyboard buttons
document.addEventListener("keydown", function (e) {
    keyPressed = e.key;
    // console.log(`Key pressed is "${keyPressed}"`);
    makeSound(keyPressed); //calling makeSound function and passing keyPressed as parameter
});


function makeSound(stick) {
    var pressedKey = "." + stick;
addAnimation(pressedKey);

    switch (stick) {
        case "w":
            // console.log("you hit w")
            const tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            // console.log("you hit a")
            const tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            // console.log("you hit s") 
            const tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            // console.log("you hit d ") 
            const tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            // console.log("you hit j ") 
            const crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "k":
            // console.log("you hit k ") 
            const kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            // console.log("you hit l ") 
            const snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        default:
            console.log(`you hit "${stick}"`)

    }

}

// Code to add button animation after click/ hitting button
function addAnimation(pressedKey){
    $(pressedKey).addClass("pressed");  //Jquery to add class 
    // Below code to wait for 100mili Sec and run the function which removes .pressed class
    // Syntax: setTimeout(function, milliseconds);
    setTimeout(function () { 
        $(pressedKey).removeClass("pressed");
    }, 100);
}