kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

loadSprite('coin', "sprites/coin.png")
loadSprite('brick', "sprites/brick.png")
loadSprite('door', "sprites/door.png")
loadSprite('evil', "sprites/evil.png")
loadSprite('mushroom', "sprites/mushroom.png")
loadSprite('question', "sprites/question.png")
loadSprite('unbox', "sprites/unbox.png")

screen("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '=====================================',
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block', solid())]
    }

    const gameLevel = addLevel(map, levelCfg)

})


start("game") 