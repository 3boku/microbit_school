input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    basic.showLeds(`
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    `)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    `)
})
input.isGesture(Gesture.Shake)
input.isGesture(Gesture.Shake)
