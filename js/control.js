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
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerColumn: 2,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerColumn: 1,
            slidesPerView: 2,
            spaceBetween: 20,
        },
        560: {
            slidesPerColumn: 2,
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
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
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        630: {
            slidesPerColumn: 2,
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

var happening = new Swiper(".hp-small-items", {
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
    spaceBetween: 3,
    slidesPerView: 1,
    slidesPerColumn: 3,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    rebuildOnUpdate: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 24,
        },
        500: {
            slidesPerView: 1,
            slidesPerColumn: 3,
            spaceBetween: 2,
        },
    },
});