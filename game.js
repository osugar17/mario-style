(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();



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