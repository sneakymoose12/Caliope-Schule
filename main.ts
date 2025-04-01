let Timer = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Timer = 5
    for (let index = 0; index < 5; index++) {
        basic.pause(1000)
        Timer += 1
        basic.showString("" + (Timer))
    }
})
