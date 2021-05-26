// Detecting Button Press

var i;
for (i = 0; i < 7; i++) {
    document.querySelectorAll('button')[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var mp3 = new Audio('sounds/tom-1.mp3');
            mp3.play();
            break;
        case "a":
            var mp3 = new Audio('sounds/tom-2.mp3');
            mp3.play();
            break;
        case "s":
            var mp3 = new Audio('sounds/tom-3.mp3');
            mp3.play();
            break;
        case "d":
            var mp3 = new Audio('sounds/tom-4.mp3');
            mp3.play();
            break;
        case "j":
            var mp3 = new Audio('sounds/snare.mp3');
            mp3.play();
            break;
        case "k":
            var mp3 = new Audio('sounds/kick-bass.mp3');
            mp3.play();
            break;
        case "l":
            var mp3 = new Audio('sounds/crash.mp3');
            mp3.play();
            break;
    
        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}