// $("#yellow").click(function(){
//     let yellow = new Audio("sounds/yellow.mp3");
//     yellow.play()
//     yellow.volume = 0.1
//     $("#yellow").animate({opacity: 0.5});
//     setTimeout(() => $("#yellow").animate({opacity: 1}))
    
// })

// repeat and create the animation
// function animations(){
//     setInterval(function(){
//         btnArray = $(".btn")
//         let randomItem = btnArray[Math.floor(Math.random()*btnArray.length)];
//         $("#"+ randomItem.id).css("border", "10px solid white");
//         setTimeout(() => {$($("#"+ randomItem.id).css("border", "10px solid black"))}, "1000")
//     }, 2000)
// }
let currentLevel = 1;


//* main user click animation
function userClick(buttonId) {
        let music = new Audio("sounds/" + buttonId + ".mp3")
        music.volume = 0.1
        music.play()
        $("#"+buttonId).animate({opacity: "0.5"})
        setTimeout(() => $("#"+buttonId).animate({opacity: 1}))
    }
//* getting pressed keys
$(document).keyup(function(event){
    //* starting the game
    if (event.key === "a"){
        //* setting animation
        function animations(){
            btnArray = $(".btn")
            let randomItemId = btnArray[Math.floor(Math.random()*btnArray.length)].id;
            $("#"+ randomItemId).css("border", "10px solid white");
            setTimeout(() => {$($("#"+ randomItemId).css("border", "10px solid black"))}, "1000")
            //* calling user click

            $(".btn").off("click").on("click", function (){
                clickedButtonId = this.id;
                userClick(clickedButtonId);
                if (clickedButtonId == randomItemId){
                    console.log("Right button was clicked!")
                } else {
                    console.log("wrong button was clicked!")
                    let music = new Audio("sounds/wrong.mp3")
                    music.volume = 0.2
                    music.play()
                }
            })
            //* checking what button user clicked
    
        }
        // $(".btn").off("click").on("click", function (){
        //     clickedButtonId = this.id;
        //     userClick(clickedButtonId);
        // })
        //* setting interval buttons will glow every 2 sec and game will end after 8 sec
        myInterval = setInterval(animations, 2000);
        setTimeout(() => {
            clearInterval(myInterval)
        }, 10000000)
        //* responding user clicks to button glowing
        //? How to get randomItem.id outer the function and compare it with click id??

        //! creating lvl difficulty

    };
})
