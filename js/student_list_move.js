$(function move(seq){
    var h = (seq-1)*94 + 10;
    $('.right_side').stop().animate({scrollTop : h}, 400);
});