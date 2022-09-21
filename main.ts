radio.onReceivedNumber(function (receivedNumber) {
    if (flag == 0 && receivedNumber == 1) {
        flag = 1
        pins.servoWritePin(AnalogPin.P0, 45)
        pins.servoWritePin(AnalogPin.P1, 135)
    }
    if (flag == 1 && receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 135)
    } else if (flag == 1 && receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 45)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (flag == 1 && receivedNumber == 0) {
        flag = 0
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (flag == 1) {
        pins.servoWritePin(AnalogPin.P0, 45)
        pins.servoWritePin(AnalogPin.P1, 135)
    }
})
let flag = 0
radio.setGroup(1)
flag = 0
