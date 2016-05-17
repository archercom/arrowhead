var cheet = require('cheet');
var $ = require('jquery');
var matchheight = require('matchheight');
// foundation things
var f_core = require('foundation.core');
var f_utils_mediaQuery = require('foundation.util.mediaQuery');
// --
var f_utils_triggers = require('foundation.util.triggers');
var f_utils_motion = require('foundation.util.motion');
var f_utils_timerAndImageLoader = require('foundation.util.timerAndImageLoader');
var f_equalizer = require('foundation.equalizer');
var f_interchange = require('foundation.interchange');
var f_toggler = require('foundation.toggler');




var arrowhead = (function () {

    'use strict';


    var $body = $('html,body');



    /**
     * scrollTo an element using jQuery
     * @param  {jQuery object} $obj
     */
    function scrollTo ($obj) {
        $body.animate({
            scrollTop: $obj.offset().top
        }, 1000);
    }

    /**
     * smooth scroll to a section of the page, original source below:
     * http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
     * event handler for anything with (data-smooth-scroll)
     */
    function smoothScrollHandler () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                scrollTo($target);
                return false;
            }
        }
    }




    /**
     * DO THE THINGS
     */
    function init() {
        // setup smooth scroll things
        $('a[data-smooth-scroll]').on('click.smooth_scroll', smoothScrollHandler);

        // new things go in here

        // konami
        cheet('↑ ↑ ↓ ↓ ← → ← → b a', {
            done: function () {
                alert('yo');
            }
        });
    }

    return {
        init: init
    };

}());






// initialize the things
$(document).ready(function () {

  // foundation
  $(document).foundation();

  // smooth scrolls and other page things
  arrowhead.init();

});
