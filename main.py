def on_gesture_tilt_left():
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)
def on_gesture_tilt_right():
    basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

input.is_gesture(Gesture.SHAKE)

input.is_gesture(Gesture.SHAKE)