/**
 * Created by white on 2017/10/1.
 */
$(document).ready(function(){
    $("#fir").height($(window).height());
    $("#sec").height($(window).height());
    $("#thi").height($(window).height());
    $("#fou").height($(window).height());
});
// 设置div的高度充满页面


$(document).ready(function() {
    $("a.link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});
// 调节a.link跳动的快慢
var j=1;
function show() {
    if(j>14)
    {
        j=1;
        clearTimeout(t);
        return;

    }
    $("#t"+j).css("display","block");
    j++;
    t=setTimeout("show()",1000);
}
$(document).ready(function () {
    show();
});
// 依次出现

var it = 0;
var mytext;
function initialize() {
    mytext = $("#typing").text();
    var myheight = $("#typing").offsetHeight;
    var mywidth =$("#typing").offsetWidth;
    $("#typing").text("");
    $("#typing").css('height', myheight);
    $("#typing").css("width", mywidth);
    $("#typing").show();
    typeit();
}
var a;
function typeit() {
    $("#typing").append(mytext.charAt(it));
    if (it < mytext.length - 1) {
        it++
        a= setTimeout("typeit()", 100);
    }
    else
    {
        clearTimeout(a);
        it=0;
        $("#typing").text(mytext);
    }

}
// 字依次出现，调用 initialize函数

function end() {
    alert("没有啦？当然有啊，未完待续，敬请期待！≖‿≖✧")

}