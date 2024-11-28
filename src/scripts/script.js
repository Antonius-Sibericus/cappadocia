'use strict';

$(document).ready(function () {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });


    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.schedule-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    $('.photos-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.photos-small-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.review-carousel.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

// $('.image-popup-vertical-fit').magnificPopup({
//     type: 'image',
//     closeOnContentClick: true,
//     mainClass: 'mfp-img-mobile',
//     image: {
//         verticalFit: true
//     }
// });

    let linkProgram = $('#header-link-program');
    let linkSchedule = $('#header-link-schedule');
    let linkPhotos = $('#header-link-photos');
    let linkReview = $('#header-link-review');
    let program = $('#program');
    let schedule = $('#schedule');
    let photos = $('#photos');
    let review = $('#review');

    linkProgram.on("click", () => {
        window.scroll({top: program.offsetTop})
    });

    linkSchedule.on("click", () => {
        window.scroll({top: schedule.offsetTop})
    });

    linkPhotos.on("click", () => {
        window.scroll({top: photos.offsetTop})
    });

    linkReview.on("click", () => {
        window.scroll({top: review.offsetTop})
    });

    let menu = $('#menu');

    $('#burger').click(() => {
        menu.css('display', 'flex');
    });

    $('.header-menu-item').click(() => {
        menu.css('display', 'none');
        menu.css('z-index', '100');
    });

    $('#menu-close').click(() => {
        menu.css('display', 'none');
    });

    let orderCall = $('#order-call');
    let footerPhoneButton = $('#footer-phone-button');
    let popupOrderCall = $('#popup-order-call');
    let callApplicationName = $('#call-application-name');
    let callApplicationPhone = $('#call-application-phone');
    let callApplicationForm = $('#call-application-form');
    let callApplicationClose = $('#call-application-close');
    let callApplicationFormButton = $('#call-application-form-button');
    let callApplicationFormLabelName = $('#call-application-form-label-name');
    let callApplicationFormLabelPhone = $('#call-application-form-label-phone');
    let callThanks = $('.call-thanks');
    let url = "https://testologia.ru/checkout";

    let loader = $('#loader');

    orderCall.click(() => {
        popupOrderCall.css("display", "flex");
    });

    footerPhoneButton.click(() => {
        popupOrderCall.css("display", "flex");
    });

    callApplicationFormButton.on("click", () => {
        let hasError = false;

        callApplicationName.css("border-color", "rgb(255, 214, 30)");
        callApplicationPhone.css("border-color", "rgb(255, 214, 30)");
        loader.css('display', 'flex');
        // callApplicationFormLabel.hide();
        callApplicationFormLabelName.hide();
        callApplicationFormLabelPhone.hide();

        if (!callApplicationName.val()) {
            callApplicationFormLabelName.show();
            callApplicationName.css("border-color", "red");
            hasError = true;
        }

        if (!callApplicationPhone.val()) {
            callApplicationFormLabelPhone.show();
            callApplicationPhone.css("border-color", "red");
            hasError = true;
        }

        if (hasError === false) {
            $.ajax({
                method: "POST",
                url: url,
                data: {name: callApplicationName.val(), phone: callApplicationPhone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        console.log(msg);
                        callApplicationForm.hide();
                        callThanks.show();
                    } else {
                        console.log(msg);
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        } else {
            loader.hide();
        }
    });

    let applicationForm = $('#application-form');
    let applicationName = $('#application-name');
    let applicationPhone = $('#application-phone');
    let applicationFormLabelName = $('#application-form-label-name');
    let applicationFormLabelPhone = $('#application-form-label-phone');
    let applicationButton = $('#application-form-button');
    let appThanks = $('#app-thanks');

    applicationButton.on("click", () => {
        let hasError = false;

        applicationName.css("border-color", "rgb(255, 214, 30)");
        applicationPhone.css("border-color", "rgb(255, 214, 30)");
        loader.css('display', 'flex');
        applicationFormLabelName.hide();
        applicationFormLabelPhone.hide();

        if (!applicationName.val()) {
            applicationFormLabelName.show();
            applicationName.css("border-color", "red");
            hasError = true;
        }

        if (!applicationPhone.val()) {
            applicationFormLabelPhone.show();
            applicationPhone.css("border-color", "red");
            hasError = true;
        }

        if (hasError === false) {
            $.ajax({
                method: "POST",
                url: url,
                data: {name: applicationName.val(), phone: applicationPhone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        console.log(msg);
                        applicationForm.hide();
                        appThanks.show();
                    } else {
                        console.log(msg);
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        } else {
            loader.hide();
        }
    });

    let footerSubscriptionInput = $('#footer-subscription-input');
    let footerSubscriptionButton = $('#footer-subscription-button');

    footerSubscriptionButton.on("click", () => {
        // footerSubscriptionInput.css("border", "rgb(255, 214, 30)");
        if (!footerSubscriptionInput.val()) {
            footerSubscriptionInput.css("border", "1px solid red");
        } else {
            footerSubscriptionInput.css("border", "1px solid rgb(255, 214, 30)");
        }
    });

    callApplicationClose.click(() => {
        popupOrderCall.css("display", "none");
    });

});