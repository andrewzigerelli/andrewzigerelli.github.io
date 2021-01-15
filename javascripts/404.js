/*!
 * pick random webm
 */

var webm = new Array();
webm[0] = "MAGA.webm";
webm[1] = "mccain.webm";
webm[2] = "walama.webm";

var num = Math.floor(Math.random() * webm.length);
var thewebm = "\/webm/" + webm[num];
document.getElementById('mywebm').src = thewebm;