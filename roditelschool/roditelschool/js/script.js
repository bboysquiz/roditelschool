$('#specialistFirstButton').click(function(){
    $('.specialists-popup__layer').css('display', 'block')
    $('#specialistFirst').css('display', 'flex')
})
$('#specialistSecondButton').click(function(){
    $('.specialists-popup__layer').css('display', 'block')
    $('#specialistSecond').css('display', 'flex')
})
$('#specialistThirdButton').click(function(){
    $('.specialists-popup__layer').css('display', 'block')
    $('#specialistThird').css('display', 'flex')
})
$('#specialistFourthButton').click(function(){
    $('.specialists-popup__layer').css('display', 'block')
    $('#specialistFourth').css('display', 'flex')
})
$('.specialists-popup__layer').click(function(){
    $('#specialistFirst').css('display', 'none')
    $('#specialistSecond').css('display', 'none')
    $('#specialistThird').css('display', 'none')
    $('#specialistFourth').css('display', 'none')
    $('.specialists-popup__layer').css('display', 'none')
})

$('#specialistFirstClose').click(function(){
    $('#specialistFirst').css('display', 'none')
    $('.specialists-popup__layer').css('display', 'none')
})
$('#specialistSecondClose').click(function(){
    $('#specialistSecond').css('display', 'none')
    $('.specialists-popup__layer').css('display', 'none')
})
$('#specialistThirdClose').click(function(){
    $('#specialistThird').css('display', 'none')
    $('.specialists-popup__layer').css('display', 'none')
})
$('#specialistFourthClose').click(function(){
    $('#specialistFourth').css('display', 'none')
    $('.specialists-popup__layer').css('display', 'none')
})

$('.questions__block').click(function(e) {
    if ($(e.target).find('.questions__icon-down').css('display') == 'block'){
        $(e.target).find('.questions__icon-down').css('display','none')
        $(e.target).find('.questions__icon-up').css('display','block')
        $(e.target).find('.questions__answer').css('display','block')
        $(e.target).find('.questions__answer').css('animation','openAnswer .5s')
    } else {
        $(e.target).find('.questions__icon-down').css('display','block')
        $(e.target).find('.questions__icon-up').css('display','none')
        $(e.target).find('.questions__answer').css('animation','closeAnswer .5s')
        setTimeout(function(){
            $(e.target).find('.questions__answer').css('display','none')
        }, 500)
    }
    
})

$(".callback__phone-input").mask("+7-999-999-99-99");

$('.callback__button').click(function(){
    $('.callback-popup__layer').css('display','block')
    $('.callback-popup').css('display','flex')
})
$('.callback-popup__layer').click(function(){
    $('.callback-popup__layer').css('display','none')
    $('.callback-popup').css('display','none')
})
$('.callback-popup__button').click(function(){
    $('.callback-popup__layer').css('display','none')
    $('.callback-popup').css('display','none')
})


$('#coursesFirstButton').click(function(){
    $('.courses-popup__layer').css('display','block')
    $('#coursesFirst').css('display','flex')
})
$('#coursesSecondButton').click(function(){
    $('.courses-popup__layer').css('display','block')
    $('#coursesSecond').css('display','flex')
})
$('#coursesThirdButton').click(function(){
    $('.courses-popup__layer').css('display','block')
    $('#coursesThird').css('display','flex')
})
$('#coursesFourthButton').click(function(){
    $('.courses-popup__layer').css('display','block')
    $('#coursesFourth').css('display','flex')
})
$('#coursesFivthButton').click(function(){
    $('.courses-popup__layer').css('display','block')
    $('#coursesFivth').css('display','flex')
})
$('.courses-popup__layer').click(function(){
    $('#coursesFirst').css('display','none')
    $('#coursesSecond').css('display','none')
    $('#coursesThird').css('display','none')
    $('#coursesFourth').css('display','none')
    $('#coursesFivth').css('display','none')
    $('.courses-popup__layer').css('display','none')
})
$('.courses-popup__close-button').click(function(){
    $('#coursesFirst').css('display','none')
    $('#coursesSecond').css('display','none')
    $('#coursesThird').css('display','none')
    $('#coursesFourth').css('display','none')
    $('#coursesFivth').css('display','none')
    $('.courses-popup__layer').css('display','none')
})

$('.header__burger').click(function(){
    if ($('.header__nav_mobile').css('display') == 'none') {
        $('.header__nav_mobile').css('display','flex')
    } else {
        $('.header__nav_mobile').css('display','none')
    }
    
})

$('.header__list-item_mobile').click(function(){
    $('.header__nav_mobile').css('display','none')
})