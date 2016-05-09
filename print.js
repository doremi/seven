/*global NextStep, document*/

NextStep.PinCodeNumber.value = document.all["pinno"].innerHTML;
NextStep.action = "PrintC2CPinCode.aspx";
NextStep.target = "";
NextStep.submit();
