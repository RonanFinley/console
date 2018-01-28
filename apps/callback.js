print("Please input a number.")
getInput(callbackType, "Controlled by Callback.js");
function callbackType() {
	var callnum = parseFloat(input.value);
	var fullnum = callnum + 5;
	print(callnum + " + 5 = " + fullnum);
	error("The program has ended.");
	resetInput();
}
