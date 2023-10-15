(function(){
    'use strict';

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime;

    var elapsedTime = 0;

    var timerId;

    var timeToadd = 0;

    function updateTimetText(){

        //(分)
        var m = Math.floor(elapsedTime / 60000);

        //(秒)
        var s = Math.floor(elapsedTime % 60000 / 1000);

        //(ミリ秒)
        var ms = elapsedTime % 1000;

        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);

        timer.textContent = m + ':' + s + ':' + ms;
    }

    function countUp(){

        timerId = setTimeout(function(){

            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText()

            countUp();

        },10);
    }

    start.addEventListener('click',function(){

        startTime = Date.now();

        countUp();
    });

    stop.addEventListener('click',function(){

       clearTimeout(timerId);

       timeToadd += Date.now() - startTime;
    });

    reset.addEventListener('click',function(){

        elapsedTime = 0;

        timeToadd = 0;

        updateTimetText();

    });
})();