/*jslint browser this */
/*global _, player */

(function (global) {
    "use strict";

    var computer = _.assign({}, player, {
        grid: [],
        tries: [],
        fleet: [],
        game: null,
        
        play: function () {
            var self = this;
            var x = utils.randomInt(0, 9);
            var y = utils.randomInt(0, 9);
                self.game.fire(this, x, y, function (hasSucced) {
                    self.tries[x][y] = hasSucced;
                    

                });
        },
        isShipOk: function (callback) {
            var i = 0;
            var j;

            this.fleet.forEach(function (ship, i) {
                j = 0;
                while (j < ship.life) {
                    this.grid[i][j] = ship.getId();
                    j += 1;
                }
            }, this);

            setTimeout(function () {
                callback();
            }, 500);
        }
    });

    global.computer = computer;

}(this));

