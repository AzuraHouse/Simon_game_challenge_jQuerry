let currentLevel = 1;
let rightAnswer = 0;
let lifes = 3
let timeinterval = 3000

//* main user click animation and sound
function userClick(buttonId) {
        let music = new Audio("sounds/" + buttonId + ".mp3")
        music.volume = 0.1
        music.play()
        $("#"+buttonId).animate({opacity: "0.5"})
        setTimeout(() => $("#"+buttonId).animate({opacity: 1}))
    }

//* setting animation
function animations(){
    btnArray = $(".btn")
    let randomItemId = btnArray[Math.floor(Math.random()*btnArray.length)].id;
    $("#"+ randomItemId).css("border", "10px solid white");
    setTimeout(() => {$($("#"+ randomItemId).css("border", "10px solid black"))}, "1000")
    //* calling user click

    $(".btn").off("click").on("click", function (){
        //* checking what button is clicked
        clickedButtonId = this.id;
        userClick(clickedButtonId);
        //* responding user clicks to glowing button
        if (clickedButtonId == randomItemId){
            console.log("Right button was clicked!")
            rightAnswer += 1
            console.log("right answer"+ " "+rightAnswer)
        } else {
            console.log("wrong button was clicked!")
            let music = new Audio("sounds/wrong.mp3")
            music.volume = 0.1
            music.play()
            lifes -= 1
            console.log("lifes remaining"+ ""+ lifes)
        }
        //* if the 3 buttons are pressed the game should turn into next lvl
        if (rightAnswer == 3){
            console.log("YES")
            timeinterval -= 500
            currentLevel += 1
            $("h1").text("Level" + " " + currentLevel)
            rightAnswer = 0
            console.log("time has decreased by"+""+ timeinterval)
        }
        })

}



//* getting pressed keys
$(document).keyup(function(event){
    //* starting the game
    if (event.key === "a"){
        //* create lvl showing h1 after "a" is pressed
        $("h1").text("Level" + " " + currentLevel)
        myInterval = setInterval(animations, parseInt(timeinterval));
        console.log(timeinterval)
        setTimeout(() => {
            clearInterval(myInterval)
        }, 10000000)
        //* setting interval buttons
        //* minimum 1 sec otherwise it's getting glitchy
        
        // TODO creating lvl difficulty
            // TODO the pressed buttons to achive next lvl should be increased by x2
            // TODO the time should be deacresed by 500ms
            // TODO lifes should equal 5 for every wrong answer -1 life, after all lifes are spend game is over


    };
})
