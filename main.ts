basic.forever(function () {
    if (input.soundLevel() < 40) {
        basic.showIcon(IconNames.Happy)
    } else if (input.soundLevel() > 60) {
        basic.showIcon(IconNames.Sad)
    } else {
    	
    }
})
