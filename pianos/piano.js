for(var i=0; i<document.querySelectorAll(".keys").length;i++ ){
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        // var audio= new Audio("sounds/key02.mp3");
        // audio.play();

        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        // buttonAnimation(buttonInnerHTML);
    });
    document.addEventListener("keydown",function(event) {
        makesound(event.key.toUpperCase());
        // console.log(key);
        // buttonAnimation(event.key);
    });
}
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