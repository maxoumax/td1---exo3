input.onButtonPressed(Button.A, function () {
    nb += 1
})
let nb = 1
basic.forever(function () {
    basic.showNumber(nb)
    if (nb == 10) {
        nb = 0
    }
})
