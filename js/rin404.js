//Copyright Rintarou°
// console版权输出
console.log("%c Rintarou°", "color:#696969;font-size:5em;");
console.log("%c ", "background: url(https://cdn.jsdelivr.net/gh/Rintarou416/blog-cdn/js/console.png) no-repeat center;padding-left:880px;padding-bottom: 220px;")
console.log("%c 失敗（しっぱい）は終（お）わりではない、諦（あきら）めるこそが終わりである。 \n ゴールが見えないから人生（じんせい）はおもしろい。\n 失败并非结束，放弃才是完结。\n 正由于看不到终点，人生才有趣。 \n 2018-10-28","color:#7266ba;background-color:#8fffffb5;padding:10px;");
// 评论打卡
function addNumber(a) {
    var length = document.getElementById("comment").value.length;
    if(length> 0){
        document.getElementById("comment").focus()
        document.getElementById("comment").value += '\n' + a + new Date
    }else{
        document.getElementById("comment").focus()
        document.getElementById("comment").value += a + new Date
    }
}
// 复制提醒
document.body.oncopy = function() {layer.msg('复制成功,若要转载请务必保留原文链接！Thanks♪(･ω･)ﾉ', function(){
   });};
