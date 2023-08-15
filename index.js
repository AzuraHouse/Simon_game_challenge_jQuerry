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

let currentLevel = 1
// main user click animation
function userClick() {
     $(".btn").click(function(){
        let music = new Audio("sounds/" + this.id + ".mp3")
        music.volume = 0.1
        music.play()
        $("#"+this.id).animate({opacity: "0.5"})
        setTimeout(() => $("#"+this.id).animate({opacity: 1}))
        // console.log(this.id)
        console.log(this.id)
        return this.id
    })
}

// setting animation
function animations(){
        btnArray = $(".btn")
        let randomItem = btnArray[Math.floor(Math.random()*btnArray.length)];
        $("#"+ randomItem.id).css("border", "10px solid white");
        setTimeout(() => {$($("#"+ randomItem.id).css("border", "10px solid black"))}, "1000")
}

// getting pressed keys
$(document).keyup(function(event){
    console.log(event.key)
    // starting the game
    if (event.key === "a"){
        // calling user click
        userClick()
        // creating lvl difficulty
        // setting interval buttons will glow every 2 sec and game will end after 8 sec
        myInterval = setInterval(animations, 2000);
        setTimeout(() => {
            clearInterval(myInterval)
        }, 8000);
    };
})
