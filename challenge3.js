// perf calculator 
// 
// http://date.jsontest.com/
function showTime() {

    let fetch = require("node-fetch");
    let sum = 0;

    for(let i =1; i <= 20; i++)
    {
        let time = new Date().getTime();
        fetch('http://date.jsontest.com/').then(function(res) {
            return res.json(); 
        }).then(function(json) {
            sum += json.millisecond_since_epoch - time;
            console.log("time calculation: " + sum/i + " ms");
        });
    }
}

showTime();

