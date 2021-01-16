/*!
 * pick random webm
 */

var webm = new Array();
webm[0] = "walama.webm";
webm[1] = "mccainout.webm";
webm[2] = "MAGA.webm";
webm[3] = "mccain.webm";

var num = Math.floor(Math.random() * webm.length);
var thewebm = "\/webm/" + webm[num];
document.getElementById('mywebm').src = thewebm;