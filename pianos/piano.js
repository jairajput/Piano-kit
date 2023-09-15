var isKeyDown = {}; 

        
        var pianoKeys = document.querySelectorAll(".keys");
        for (var i = 0; i < pianoKeys.length; i++) {
            pianoKeys[i].addEventListener("click", function () {
                var buttonInnerHTML = this.innerHTML;
                makesound(buttonInnerHTML);
            });
        }

        // Add event listener for keyboard keydown events
        document.addEventListener("keydown", function (event) {
            var key = event.key.toUpperCase();

            // Check if the key is already down to prevent rapid repeated presses
            if (!isKeyDown[key]) {
                isKeyDown[key] = true;
                makesound(key);
            }
        });

        // Add event listener for keyboard keyup events
        document.addEventListener("keyup", function (event) {
            var key = event.key.toUpperCase();
            isKeyDown[key] = false;
        });

function makesound(key){
    switch (key) {
        case "A":
            var audio= new Audio("sounds/Key01.mp3");
            audio.play();
            break;
        case "B":
            var audio= new Audio("sounds/key02.mp3");
            audio.play();
            break;
        case "C":
            var audio= new Audio("sounds/key03.mp3");
            audio.play();
            break;
        case "D":
            var audio= new Audio("sounds/key04.mp3");
            audio.play();
            break;
        case "E":
            var audio= new Audio("sounds/key05.mp3");
            audio.play();
            break;
        case "F":
            var audio= new Audio("sounds/key06.mp3");
            audio.play();
            break;
        case "G":
            var audio= new Audio("sounds/key07.mp3");
            audio.play();
            break;
        case "H":
            var audio= new Audio("sounds/key08.mp3");
            audio.play();
            break;
        case "I":
            var audio= new Audio("sounds/key09.mp3");
            audio.play();
            break;
        case "J":
            var audio= new Audio("sounds/key10.mp3");
            audio.play();
            break;
        case "K":
            var audio= new Audio("sounds/key11.mp3");
            audio.play();
            break;
        case "L":
            var audio= new Audio("sounds/key12.mp3");
            audio.play();
            break;
        case "M":
            var audio= new Audio("sounds/key13.mp3");
            audio.play();
            break;       
    }
}