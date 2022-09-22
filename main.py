input.is_gesture(Gesture.SHAKE)

def on_forever():
    
    basic.show_number(input.temperature())
basic.forever(on_forever)
