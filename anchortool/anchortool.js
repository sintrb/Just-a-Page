/**
 * 
 * @authors RobinTang
 * @email   sintrb@gmail.com
 * @date    2014-03-12 00:01:13
 * @moreinfo https://github.com/sintrb/Just-a-Page/tree/master/anchortool
 * @version 1.0
 */



jQuery.fn.anchortool = function (content, beforeshow) {
    var at = $('<div class="anchortool"><div class="anchor"></div><div class="content"></div></div>');
    var atc = content?$(content):$(this).find(".anchortool-content");
    at.hide();
    at.appendTo('body')
    at.find('.content').html('');
    at.find('.anchor').css('border-bottom-color', atc.css('background-color'));
    at.find('.content').css('background-color', atc.css('background-color'));
    $(this).attr('data-anchortool', "true");

    atc.appendTo(at.find('.content'));

    $(this).click(function(event) {
        if(beforeshow)
            if(!beforeshow.call(this))
                return;
        at.css({
            left: $(this).offset().left + ($(this).outerWidth()-at.outerWidth())/2,
            top: $(this).offset().top+$(this).outerHeight() + 1,
        });
        at.show();
    });

    var thiz = $(this);
    $(document).click(function (e) {
        if ($(e.target).parents("[data-anchortool=true]").length==0 && $(e.target).attr('data-anchortool')!="true"){
            at.hide();
        }
    });



    return $(this);
};

