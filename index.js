//play drum sound based on the key
function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var snare = new Audio("sounds/crash.mp3");
            snare.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}

//get the length of button with drum class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//add event listener for all drum buttons
for (var i=0; i<numberOfDrumButtons; i++) {
    //add event listener for click
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //get the inner value
        var buttonInner = this.innerHTML;

        //play the sound
        playSound(buttonInner);

        //give animation
        animation(buttonInner);
    });
}

//add event listener for keyboard pressed
document.addEventListener("keydown", function(event){
    //play sound
    playSound(event.key);

    //give animation
    animation(event.key);
});

//add animation on clicked/pressed
function animation(key) {
    //get the active button
    var activeButton = document.querySelector("." + key);

    //add style class
    activeButton.classList.add("pressed");

    //set timeout and remove style class
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}