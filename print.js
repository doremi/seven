/*global NextStep, document, $*/

NextStep.action = "PrintC2CPinCode.aspx";
NextStep.target = "";

var regex = /^取號中/;
var pinno = $('#pinno').text();

if (!pinno.match(regex)) {
    NextStep.PinCodeNumber.value = pinno;
    NextStep.submit();
} else {
    $('#pinno').bind("DOMSubtreeModified", function () {
        "use strict";
        var pinno = $(this).text();
        if (!pinno.match(/^取號中/)) {
            NextStep.PinCodeNumber.value = pinno;
            NextStep.submit();
        }
    });
}
