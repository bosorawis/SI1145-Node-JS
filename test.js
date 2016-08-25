//var i2c = require('i2c-bus');
//var i2c1 = i2c.openSync(1);


var SI1145 = require('./src/adafruit-si1145');

var si1145 = new SI1145(0x60, '/dev/i2c-1', true);
var uvIndex, visibleLight;
//var si1145 = new SI1145();
si1145.init();
function readItem(){
    si1145.readUV(function(err, res){
        if(!err){
            console.log("=====Start Read=====");
            uvIndex = (res[0] | res[1] << 8)/100;
            console.log('UV index: ' + uvIndex);
        }
        else{
            uvIndex = 'Bad Read';
        }
    });

    si1145.readVisible(function(err, res){
        if(!err){
            //console.log("VIsible Light");
            visibleLight = (res[1]<<8) | res[0];
            console.log('Visible Light: ' + visibleLight);
            console.log('=====End Read=======');    
        }
        else{
            visibleLight = 'Bad Read';
        }
    });
}


sleep(2000).then(() => {
    setInterval(readItem, 1000);
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
