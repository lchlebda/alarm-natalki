input.onGesture(Gesture.ScreenUp, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
radio.setGroup(255)
basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showIcon(IconNames.Angry)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
