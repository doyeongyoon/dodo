$(document).ready(function() {
    $('#gnb>li').hover(function() {
        $('.submenu', this).stop().slideDown();
    }, function() {
        $('.submenu', this).stop().slideUp();
    });

    var idx = 0;
    setInterval(function() {
    $('#slide>a').eq(idx).animate({top: '-100%'}, 400).animate({top:'100%'}, 0);
    idx==2?idx=0:idx++;
    // if(idx==2) {idx = 0} else {idx++;}
    $('#slide>a').eq(idx).animate({top: '0%'}, 400);
    }, 3000);

    $('#tab>li').click(function(){
        var idx = $(this).index();
        $('#recent>div').eq(idx).show().siblings('div').hide();
        $(this).addClass('selected').siblings('li').removeClass('selected');
    })
    

    $('.pop').click(function() {
        $('#popup').fadeIn();
    });

    $('.close').click(function() {
        $('#popup').hide();
    });
});