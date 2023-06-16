

/* progresbar animation */
if (windowWidth767()) {
    flag_one_time_stop_scrool = true;
    jQuery(function () {
        var $elems = jQuery('.ani');
        var winheight = jQuery(window).height();
        var fullheight = jQuery(document).height();

        animate_elems_initial();

        jQuery(window).scroll(function () {
            animate_elems();
        });

        function animate_elems() {
            wintop = jQuery(window).scrollTop(); // calculate distance from top of window

            // loop through each item to check when it animates
            $elems.each(function () {
                $elm = jQuery(this);

                if ($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

                topcoords = $elm.offset().top; // element's distance from top of page in pixels


                //desktop
                if (wintop > (topcoords - (winheight * .75))) {
                    // animate when top of the window is 3/4 above the element
                    $elm.addClass('animated');
                    if (flag_one_time_stop_scrool) {
                        // jQuery('.section-home-five').bind("mousewheel", function() {
                        // return false;
                        // });
                    }
                    setTimeout(function () {
                        jQuery('.progress').attr('data-num', '1');
                    }, 1000);
                    setTimeout(function () {
                        jQuery('.box[data-num="1"]').addClass('active');
                    }, 1950);
                    setTimeout(function () {
                        jQuery('.progress').attr('data-num', '2');
                    }, 2000);
                    setTimeout(function () {
                        jQuery('.box[data-num="2"]').addClass('active');
                    }, 2950);
                    setTimeout(function () {
                        jQuery('.progress').attr('data-num', '3');
                    }, 3000);
                    setTimeout(function () {
                        jQuery('.box[data-num="3"]').addClass('active');
                    }, 3950);
                    setTimeout(function () {
                        jQuery('.progress').attr('data-num', '4');
                    }, 4000);
                    setTimeout(function () {
                        jQuery('.box[data-num="4"]').addClass('active');
                    }, 4950);
                    setTimeout(function () {
                        jQuery('.progress').attr('data-num', '5');
                        if (flag_one_time_stop_scrool) {
                            // jQuery('.section-home-five').bind("mousewheel", function() {
                            // flag_one_time_stop_scrool = false;
                            // return true;
                            // });
                        }
                    }, 5000);
                }


            });
        }


        function animate_elems_initial() {
            wintop = jQuery(window).height(); // calculate distance from top of window

            // loop through each item to check when it animates
            $elems.each(function () {
                $elm = jQuery(this);

                if ($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

                topcoords = $elm.offset().top; // element's distance from top of page in pixels

                if (winheight > topcoords) {
                    // animate when top of the window is 3/4 above the element
                    $elm.addClass('animated');
                }

            });
        }
    });

} else {
    var counter_aa = 0;
    console.log('b');
    jQuery(function () {
        var $elems = jQuery('.ani-box');
        var winheight = jQuery(window).height();
        var fullheight = jQuery(document).height();

        animate_elems_initial();

        jQuery(window).scroll(function () {
            animate_elems();
        });

        function animate_elems() {
            wintop = jQuery(window).scrollTop(); // calculate distance from top of window

            // loop through each item to check when it animates
            $elems.each(function () {
                $elm = jQuery(this);

                if ($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

                topcoords = $elm.offset().top; // element's distance from top of page in pixels

                //desktop
                if (wintop > (topcoords - (winheight * .75))) {
                    // animate when top of the window is 3/4 above the element
                    $elm.addClass("active");
                    checkprogress();
                }

            });
        }


        function animate_elems_initial() {
            wintop = jQuery(window).height(); // calculate distance from top of window

            // loop through each item to check when it animates
            $elems.each(function () {
                $elm = jQuery(this);

                if ($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

                topcoords = $elm.offset().top; // element's distance from top of page in pixels

                if (winheight > topcoords) {
                    // animate when top of the window is 3/4 above the element
                    $elm.addClass('animated');
                    counter++;
                    console.log('counter 22', counter);
                    if (counter < 6) {
                        console.log('counter ture 22', counter);
                        jQuery('.progress').attr('data-num', counter);
                    }

                }

            });
        }
    });

}

function checkprogress() {
    counter = 0;

    /* console.log('counter ww',counter_aa);
    if(counter<6){
        console.log('counter ture ww',counter_aa);
        jQuery('.progress').attr('data-num',counter_aa);
    } */
    jQuery('.progress .loop .box').each(function () {
        if (jQuery(this).hasClass('active')) {
            counter++;
        } else {

        }
    });
    jQuery('.progress').attr('data-num', counter);
    if (counter == 4) {
        counter++;
        setTimeout(function () {
            jQuery('.progress').attr('data-num', counter);
        }, 250);
    }
}

//Check width of window 767px
function windowWidth767() {
    if (jQuery(window).width() > 991)
        return true;
    else
        return false
}

/* land popup */
jQuery(function ($) {

    jQuery('.module-popup-close-btn').click(function () {
        jQuery('#module-2-popup').hide();
        // jQuery('.module-popup-inner-inner-text').html('');
        jQuery('body').css('overflow', 'auto');
        jQuery('body').css('padding-right', '0px');
    });


});
/* land popup open */
function modulepopup() {
    jQuery('#module-2-popup').show();
    jQuery('body').css('overflow', 'hidden');
    jQuery('body').css('padding-right', '15px');
    jQuery('.module-popup-inner-inner-inner').scrollTop(0);
}

