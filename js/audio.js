document.querySelector(".area1_first").addEventListener('click', function(){
    var audio1 = new Audio("footsteps.mp3");
    audio1.loop = false;
    audio1.volume= 0.5;
    audio1.play();
})