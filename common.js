$(function(){
    $('.js-counter-form').keyup(function(){
        $('.js-text-counter').text($(this).val().length);
    });
});