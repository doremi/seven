/*global console, $*/

$('table tbody tr td:first').css('border-style', 'none');
$('table tbody tr td div:first').css('border', '2px solid #ffffff');
var contents = $('#table > tbody > tr');
contents[3].remove();
contents[4].remove();

var bars = $('#tableA2 > tbody:first > tr td');
bars.splice(0, 1);
bars.css('padding-top', '8px');

console.log("完成啦！");
