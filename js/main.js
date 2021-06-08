// document.addEventListener('scroll', function(){
//     var scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     console.log(scrollPosition);
// });

//703일 때 아래 딱 맞게 이동임
// document.addEventListener('scroll', function(){
//     var scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     console.log(scrollPosition);

//     if(0 <= scrollPosition, scrollPosition < 200){
//         window.scrollTo({top:703, left:0, behavior:'auto'});
//     }else{
//         window.scrollTo({top:0, left:0, behavior:'auto'});
//     }
// });


  // var html = $("html");
  // var page = 1;
  // var lastPage = $(".container").length;

// 이미지 슬라이드
//   var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
//   var ObjectArray = new Array();
//   ObjectArray[1] = "./image/main_apb/Particle1.svg";
//   ObjectArray[2] = "./image/main_apb/Particle2.svg";
//   ObjectArray[3] = "./image/main_apb/Particle3.svg";
//   var nObjectCnt = 0;

//   function ShowDefaultRotate() {
//     // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
//     nObjectCnt++;
//     if (nObjectCnt == 4) {
//         nObjectCnt=0;
//     }
//     document.getElementById("pop_img").src = ObjectArray[nObjectCnt];
//     setTimeout("ShowDefaultRotate()", 1000); // 1초후에 자기자신을 호출
    
//   }
//   function startAnimation() {
//     obTimeOut = window.setTimeout(ShowDefaultRotate, 100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
//   }
//   window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행

window.onload = function () {
  var cursor = document.getElementById("par_next");
  cursor.onclick = function () {
    console.log("zmfflr");
    document.getElementsByTagName("body")[0].style.cursor =
      "url('https://i.postimg.cc/MTZntCwQ/Group-199.png'), auto";
  };
};


$('#ticket_back').click(function(){
    // $('#ticket_red').animate({'transform':'rotate(30deg)'}, 1000)
    $('#ticket_red').css({'transform':'rotate(30deg)'})
  
    setTimeout(function() {
      $('#ticket_back').css({'display':'none'})
    }, 2100);
  
    $('#ticket_back').animate({'opacity':'0'}, 2200)
  });

$(document).ready(function () {
  $(".container .speaker3").click(function () {
    $("#mouth_img").animate({ opacity: "1" }, 300);
  });

  $("#par_next").click(function () {
    $(".concept_text").animate({ opacity: "0.2", left: "200px" }, 1500);
  });

  $(".container_info .speaker").click(function () {
    $("#pop_img1").animate({ height: "100%" }, 1000);
    $("#pop_img2").animate({ height: "100%" }, 1000);
    $("#pop_img3").animate({ height: "100%" }, 1000);
    $("#pop_img4").animate({ height: "100%" }, 1000);
    $("#pop_img5").animate({ height: "100%" }, 1000);
    $("#pop_img1").addClass('animation1');
    $("#pop_img2").addClass('animation2');
    $("#pop_img3").addClass('animation3');
    $("#pop_img4").addClass('animation1');
    $("#pop_img5").addClass('animation3');

    setTimeout(function() {$('#pop_img1').css({'display':'none'})}, 2000);
    setTimeout(function() {$('#pop_img2').css({'display':'none'})}, 2000);
    setTimeout(function() {$('#pop_img3').css({'display':'none'})}, 2000);
    setTimeout(function() {$('#pop_img4').css({'display':'none'})}, 2000);
    setTimeout(function() {$('#pop_img5').css({'display':'none'})}, 2000);



    // $(".container_info .speaker").animate({ opacity: "1" }, 100);
    // $(".container_info #mouth2").animate({ opacity: "1" }, 100);
    // $(".container_info #mouth3").animate({ opacity: "1" }, 100);
    // ShowDefaultRotate();
  });
});

// document.getElementsByClassName("department")
