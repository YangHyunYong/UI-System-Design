
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

// document.getElementsByClassName("department")

