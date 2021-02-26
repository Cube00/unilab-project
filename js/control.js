var morenews = new Swiper(".wrap-items", {
    speed: 400,
    spaceBetween: 10,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".next",
        prevEl: ".prew",
    },
    effect: "slide",
    spaceBetween: 40,
    slidesPerView: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
});

var trending = new Swiper(".trending-items", {
    speed: 400,
    spaceBetween: 10,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prew",
    },
    effect: "slide",
    spaceBetween: 40,
    slidesPerView: 3,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        960: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 6,
        },
        540: {
            slidesPerView: 2,
            spaceBetween: 4,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 2,
            direction: "vertical",
        },
    },
});

var happening = new Swiper(".happening-items", {
    speed: 400,
    spaceBetween: 10,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".hp-next",
        prevEl: ".hp-prew",
    },
    effect: "slide",
    spaceBetween: 40,
    slidesPerView: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
});