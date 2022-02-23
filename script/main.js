$(function(){
    popup();
    tab();
    menu();
    setInterval(slide, 3000); // 매 3초마다 slide 함수를 실행해!
});
var i = 0;
function slide(){
    var nPos = -300 * i;
    console.log("다음 이동위치 : "+nPos);
    $("#imgs").css("top", nPos);
    if(i >= 2) {
        i = 0
    } else {
        i++; // 전역변수 i를 1 증가시켜!    
    }
}
function menu(){
    $("#gnb > li").mouseover(function(){
        $(".lnb").css("display", "block");
        $(this).addClass("highlight");
    });
    $("#gnb > li").mouseout(function(){
        $(".lnb").css("display", "none");
        $(this).removeClass("highlight");
    });
}
function tab(){
    $("#gallery").click(function(){
        $(".news-list").css("display", "none");
        $(".gallery-list").css("display", "block");
        $(this).addClass("active");
        $("#news").removeClass("active")
        
    });
    $("#news").click(function(){
        $(".news-list").css("display", "block");
        $(".gallery-list").css("display", "none");
        $(this).addClass("active");
        $("#gallery").removeClass("active")
    })
}
function popup(){
    showPopup();
    hidePopup();
}
function showPopup(){
    $(".news-list li:nth-child(1)").click(function(){
        $("#modal").css("display", "block")
    })
}
function hidePopup(){
    $("#btn_close").click(function(){
        $("#modal").css("display", "none");
    })
}