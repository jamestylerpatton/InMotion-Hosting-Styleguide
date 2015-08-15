var $ = jQuery = require('jQuery'),
    drags = require('./drags.js'),
    items = require('./item-data.js'),
    bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'),
    // detectElements = require('./detect-elements.js'),
    clickableItems = require('./clickable-items.js');

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

        clickableItems($);

        // Compads
        $('.comp_adv_trigger').tooltip();

        // Seach Domain Form Code
        $(function(){
            var domain_search_obj = $('#domain-search-button');
            var input_obj = $('input#domain-search-input');
            var valid_exts = ['com', 'net', 'org', 'info', 'biz', 'us'];
            input_obj.keydown(function(e){
                if (e.keyCode == 13) {
                    domain_search_obj.first().trigger('click');
                    return false;
                }
                return true;
            });
            domain_search_obj.click(function(){
                var input_text = input_obj.val();
                var responseSec = $('#domain-input-wrap'),
                    resContainer = $('.res-container');
                responseSec.removeClass('error success');
                if (input_text == '') {
                    // Enter a Domain
                    resContainer.html('Enter a Domain');
                    responseSec.addClass('error');
                    input_obj.trigger('focus').select();
                } else if (input_text.match(/^[a-z0-9]([a-z0-9\-]*[a-z0-9])*\.([a-z]{2,4}\.)*[a-z]{2,4}$/i) == null) {
                    // Not a Domain
                    resContainer.html('Not a Domain');
                    responseSec.addClass('error');
                    input_obj.trigger('focus').select();
                } else if (valid_exts.indexOf((input_text.split('.'))[1]) == -1) {
                    // Invalid TLD
                    resContainer.html('Invalid TLD');
                    responseSec.addClass('error');
                    input_obj.trigger('focus').select();
                } else {
                    input_obj.prop('readonly', true);
                    resContainer.html('Loading...');
                    responseSec.addClass('loading');
                    $('.loading-gear').show();
                    setTimeout(function(){
                        input_obj.prop('readonly', false);
                        responseSec.removeClass('loading');
                        resContainer.html('Available! <a href=\'#forms\' onclick=\'return false;\'>Order Now</a>');
                        responseSec.addClass('success');
                        $('.loading-gear').hide();
                    }, 1000);
                }
                return false;
            });
        });
    });

})(jQuery);