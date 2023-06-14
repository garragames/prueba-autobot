input.onButtonPressed(Button.A, function () {
    autoBot.move()
})
input.onButtonPressed(Button.B, function () {
    autoBot.stop()
})
let distancia = 0
autoBot.setSeatbelt(autoBot.BeltStates.Fasten)
autoBot.setManualGear(autoBot.ManualGears.Neutral)
autoBot.turnDirection(autoBot.Directions.Front)
basic.forever(function () {
    distancia = autoBot.senseUltrasonic()
    console.log(distancia)
if (distancia < 10) {
        autoBot.stop()
        basic.pause(1000)
        autoBot.setManualGear(autoBot.ManualGears.Reverse)
        autoBot.turnDirection(autoBot.Directions.Left)
        autoBot.move()
        basic.pause(500)
    }
    autoBot.setManualGear(autoBot.ManualGears.Second)
    autoBot.turnDirection(autoBot.Directions.Front)
    autoBot.move()
    console.log('FORWARD: ' + autoBot.senseLight())
    basic.pause(200)
})
