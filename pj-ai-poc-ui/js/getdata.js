$(function(){

//JSONデータ
var data = {  info1: "お客さん、牛肉いいのが入ったよ！", 
              info2: "＃ステーキ　＃しゃぶしゃぶ　＃焼肉　＃焼肉のたれ　＃ごまだれ"
}
var data1 = {"release": [
{
"day": "img/fd400121.jpg",
"label": "玉ねぎ　バラ・１個",
"price": "50",
"category1": "北海道産",
"category2": "北海道産玉ねぎバラ１個。サイズ：L/.健康的な食生活のためにタマネギ「畑の昆布」と言ってもいい程旨味成分が豊富な野菜です",
"url": "http://www.yahoo.co.jp/",
"target": "_blank"
},

{
"day": "2013.07.30",
"label": "products",
"price": "36",
"category1": "テキストテキストテキスト",
"category2": "テキストテキストテキスト",
"url": "http://www.google.co.jp/",
"target": "_blank"
},

{
"day": "2013.07.30",
"label": "company",
"price": "46",
"category1": "テキストテキストテキスト",
"category2": "テキストテキストテキスト",
"url": "http://www.yahoo.co.jp/",
"target": "_self"
}
]}


$("h2").html("");
$('<div class="h2">' +data.info1 + '</div>').appendTo('h2');

$("h3").html("");
$('<div class="h3">' +data.info2 + '</div>').appendTo('h3');

//HTMLを初期化
//$("table.tbl tbody").html("");

    //for(var index in data1.release){
    //$('<tr>'+
    //'<td rowspan="4" ><img width=60px height=50px src="'+data1.release[index].day+'" /></td>'+
    //'<td align="left"><a href="' + data1.release[index].url +
    //'" target="' + data1.release[index].target +
    //'">' + data1.release[index].label + '</a></td>'+
    //'</tr>'+
    //'<tr>'+
    //'<td class="label" align="left"><span style="font-weight:800">'+ "￥" + data1.release[index].price + "(税抜き)" +'</span></td>'+
    //'</tr>'+
    //'</tr>'+
    //'<tr>'+
    //'<td class="label" align="left"><span >' +data1.release[index].category1 + '</span></td>'+
    //'</tr>'+
    //'<tr>'+
    //'<td width=70% class="label" align="left"><div >' +data1.release[index].category2 + '</div></td>'+
    //'</tr>').appendTo('table.tbl tbody');
    //}
});