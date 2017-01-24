'use strict';

var $ = jQuery;

$(function() {
    $('a[href*="#"]:not([href="#collapseOne"]):not([href="#collapseTwo"]):not([href="#collapseHelper"]):not([href="#collapseContColors"]):not([href="#collapseContBg"]):not([href="#collapseCloseIcon"]):not([href="#collapseCarets"]):not([href="#collapseQFloats"]):not([href="#collapseCBlock"]):not([href="#collapseClearfix"]):not([href="#collapseSHC"]):not([href="#collapseImgRep"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});
