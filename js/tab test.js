// JavaScript Document
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');


$('.tabs-nav a').on('click', function(event) {
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $(this).show();
})