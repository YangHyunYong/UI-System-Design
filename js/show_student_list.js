window.onload = function(){
    var first_img = document.getElementById('first_img');
    var name1 = document.getElementById('first_name');
    var name2 = document.getElementById('second_name');
    var name3 = document.getElementById('third_name');

    first_img.addEventListener('mouseover', e => {
        name1.style.color = "#ff5924";
        name2.style.color = "#ff5924";
        name3.style.color = "#ff5924";
    })
    first_img.addEventListener('mouseout', e => {
        name1.style.color = "rgba(255, 255, 255, 0.9)";
        name2.style.color = "rgba(255, 255, 255, 0.9)";
        name3.style.color = "rgba(255, 255, 255, 0.9)";
    })

    var second_img = document.getElementById('second_img');
    var name4 = document.getElementById('fourth_name');
    var name5 = document.getElementById('fifth_name');
    var name6 = document.getElementById('sixth_name');

    second_img.addEventListener('mouseover', e => {
        name4.style.color = "#ff5924";
        name5.style.color = "#ff5924";
        name6.style.color = "#ff5924";
    })
    second_img.addEventListener('mouseout', e => {
        name4.style.color = "rgba(255, 255, 255, 0.9)";
        name5.style.color = "rgba(255, 255, 255, 0.9)";
        name6.style.color = "rgba(255, 255, 255, 0.9)";
    })
}