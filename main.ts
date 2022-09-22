input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # . . # .
        # # # . .
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
	
})
