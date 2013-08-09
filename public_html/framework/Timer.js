
Timer = function ( ) {

};

Timer.prototype = {
    constructor: Timer,
    startTime: 0,
    stopTime: 0,
    running: false,
    start: function ( ) {
        'use strict';
        this.running = true;
        this.startTime = Date.now ( );
    },
    stop: function ( ) {
        'use strict';
        this.running = false;
        this.stopTime = Date.now ( );
    },
    reset: function ( ) {
        'use strict';
        var time = Date.now ( );
        this.startTime = time;
        this.stopTime = time;
    },
    getElapsedMs: function ( ) {
        'use strict';
        if (this.running) {
            return Date.now ( ) - this.startTime;
        }

        return this.stopTime - this.startTime;
    },
    getElapsedSec: function ( ) {
        'use strict';
        return Math.floor (this.getElapsedMs ( ) / 1000);
    }

};

Timer.getDigitalRep = function (seconds) {
    'use strict';
    var minutes = Math.floor (seconds / 60);
    seconds = seconds - minutes * 60;

    var digitalRep = undefined;
    if (seconds < 10) {
        digitalRep = minutes + ':0' + seconds;
    } else {
        digitalRep = minutes + ':' + seconds;
    }

    return digitalRep;
};
