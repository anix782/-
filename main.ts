input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    game.removeLife(1)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    game.addLife(1)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # . # #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenDown, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    game.removeLife(1)
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
game.addLife(3)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Asleep)
