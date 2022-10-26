radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 45)
        pins.servoWritePin(AnalogPin.P1, 135)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 135)
        pins.servoWritePin(AnalogPin.P1, 45)
    } else if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
radio.setGroup(1)
