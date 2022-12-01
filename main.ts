input.onButtonPressed(Button.A, function () {
    radio.sendString("hfdjks")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Bfjdsk")
})
radio.setGroup(1)
basic.forever(function () {
	
})
