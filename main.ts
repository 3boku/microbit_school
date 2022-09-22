let 밝기 = 0
basic.forever(function on_forever() {
    
    밝기 = input.lightLevel()
    if (밝기 >= 20) {
        basic.showString("day")
    }
    
})
