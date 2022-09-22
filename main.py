밝기 = 0

def on_forever():
    global 밝기
    밝기 = input.light_level()
    if 밝기 >= 20:
        basic.show_string("day")
basic.forever(on_forever)
