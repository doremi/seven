/*global console, $*/

$('table tbody tr td:first').css('border-style', 'none');
$('table tbody tr td div:first').css('border', '2px solid #ffffff');
var contents = $('#table > tbody > tr');
contents[3].remove();
contents[4].remove();

console.log("完成啦！");
