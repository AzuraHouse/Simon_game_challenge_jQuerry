// $("#yellow").click(function(){
//     let yellow = new Audio("sounds/yellow.mp3");
//     yellow.play()
//     yellow.volume = 0.1
//     $("#yellow").animate({opacity: 0.5});
//     setTimeout(() => $("#yellow").animate({opacity: 1}))
    
// })

// getting pressed keys
startGame = false
$(document).keyup(function(event){
    console.log(event.key)
    if (event.key === "a"){
        btnArray = $(".btn")
        let randomItem = btnArray[Math.floor(Math.random()*btnArray.length)];
        $("#"+ randomItem.id).css("border", "10px solid white")
        setTimeout(() => {$($("#"+ randomItem.id).css("border", "10px solid black"))}, "5000")
    }
})

// main user click animation
$(".btn").click(function(){
    let music = new Audio("sounds/" + this.id + ".mp3")
    music.volume = 0.1
    music.play()
    $("#"+this.id).animate({opacity: "0.5"})
    setTimeout(() => $("#"+this.id).animate({opacity: 1}))
})
