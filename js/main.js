
// document.addEventListener('scroll', function(){
//     var scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     console.log(scrollPosition);
// });

//703일 때 아래 딱 맞게 이동임
document.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPosition);

    // if(0 <= scrollPosition, scrollPosition < 200){
    //     window.scrollTo({top:703, left:0, behavior:'auto'});
    // }else{ 
    //     window.scrollTo({top:0, left:0, behavior:'auto'});
    // }
});

window.onload = function(){
    var cursor = document.getElementById('par_next');

    cursor.onclick = function(){
        console.log('zmfflr');
        document.getElementsByTagName("body")[0].style.cursor = "url('https://i.postimg.cc/MTZntCwQ/Group-199.png'), auto";
    };

};

$(document).ready(function(){
    $('.container .speaker').click(function(){
        $('#mouth_img').animate({opacity:'1'},300);
    });

    $('#par_next').click(function(){
        $('.concept_text').animate({opacity:'0.2',left:'200px'},1500);
    })
    
    $('.container_info .speaker').click(function(){
        $('#pop_img').animate({opacity:'1'},500);
        $('.container_info .speaker').animate({opacity:'0'},100);
        $('#mouth2').animate({opacity:'1'},100);
        $('#mouth3').animate({opacity:'1'},100);

    })
})


// document.getElementsByClassName("department")

