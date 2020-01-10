// const logosArray = [
//     '01.jpg',
//     '02.jpg',
//     '03.jpg',
//     '04.jpg',
//     '05.jpg',
//     '06.jpg',
//     '07.jpg',
//     '08.jpg',
//     '09.jpg',
//     '10.jpg',
//     '11.jpg'
// ];

// $(".logo_row").append('<img>').addClass('logo-item').attr('src','/img/01.jpg');


$(function(){

    $("#box-01").mouseover(function(){
        $(".text-hover").show();
    });

    $("#box-01").mouseout(function(){
        $(".text-hover").hide();
    });
});