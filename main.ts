radio.onReceivedNumber(function (receivedNumber) {
    if (flag == 0 && receivedNumber == 1) {
        flag = 1
        servos.P0.setAngle(45)
        servos.P1.setAngle(135)
    }
    if (flag == 1 && receivedNumber == 1) {
        servos.P1.setAngle(135)
    } else if (flag == 1 && receivedNumber == 2) {
        servos.P0.setAngle(45)
    } else if (flag == 1 && receivedNumber == 0) {
        flag = 0
        servos.P0.setAngle(90)
        servos.P1.setAngle(90)
    } else if (flag == 1) {
        servos.P0.setAngle(45)
        servos.P1.setAngle(135)
    }
})
let flag = 0
radio.setGroup(1)
flag = 0
