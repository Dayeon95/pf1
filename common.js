$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1190: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    })

    $('.bannerList>div').eq(0).addClass('on')
    $('.bg_list>li').eq(0).addClass('on') //첫번째 리스트만 보이기

    //탭메뉴 클릭하면 내용 변경하기 
    $('.bannerList>div').on('click', function () {
        let idth = $(this).index()
        console.log(idth)
        $('.bannerList>div').removeClass('on')
        $(this).addClass('on')
        // $(this).fadeIn(1000)
        $('.bg_list>li').removeClass('on')
        $('.bg_list>li').eq(idth).addClass('on')
    })


    $('.ham').on('click', function () {
        $('.gnb').removeClass('off')
        $('.gnb').addClass('on')
    })
    $('.menu_close').on('click', function () {
        $('.gnb').removeClass('on')
        $('.gnb').addClass('off')
    })

    AOS.init({
        // 스크롤의 떨어진 거리
        //offset:200,
        //duration:1000
    });
})
