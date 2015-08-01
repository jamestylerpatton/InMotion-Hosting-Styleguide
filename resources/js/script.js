var $ = jQuery = require('jQuery'),
    drags = require('../../web/js/drags.js'),
    bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'),
    detectElements = require('../../web/js/detect-elements.js');

(function($) {

    $(function(){
        $( "#branding" ).load( "views/branding.html");
        $( "#colors" ).load( "views/colors.html");
        $( "#typography" ).load( "views/typography.html");
        $( "#buttons" ).load( "views/buttons.html");
        $( "#forms" ).load( "views/forms.html");
        $( "#rostrum" ).load( "views/rostrum.html");
        $( "#tables" ).load( "views/tables.html");
        $( "#compads" ).load( "views/compads.html", init);
    });

    var init = (function(){
        // Turn anchor links into smoothscroll
        $(function(){
            $('#navbar a').click(function(event){
                var link = $(this).attr('href');
                if (typeof link !== typeof undefined && link !== false){
                    if (link.indexOf('#') === 0){
                        event.preventDefault();
                        var destination = link.split('#')[1];

                        if (destination !== ''){
                            var goToDest = $(link).offset().top;
                            $('html,body').animate({
                                scrollTop: goToDest
                            }, 500);
                            return false;
                        }
                    }
                }
            });
        });
    });

})(jQuery);