input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
