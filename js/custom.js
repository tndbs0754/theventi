$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
})

$('.main_product_slide').slick({
    slidesToshow: 4,
    arrows: false,
    dots: true,
});

$('main_product .arrows .prev').on('click', function () {
    $('.main_product_slide').slick('slickPrev')
})

$('main_product .arrows .prev').on('click', function () {
    $('.main_product_slide').slick('slickNext')
})

$('.main_event_slide').slick({
    slidesToshow: 5,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
});

$('.main_customer .news .news_menu button').on('click', function () {
    let idx = $(this).parent().index();//0,1
    $('.main_customer .new_content>ul')
        .eq(idx)
        .addClass('on')
        .siblings()
        .removeClass('on');

    $(this).parent().addClass('on').siblings().removeClass('on')

});

