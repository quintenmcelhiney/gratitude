const fs = require('fs');
var data = fs.readFileSync('meds.txt','utf8');
var lines = data.split('/\r?\n/');
console.log(lines);

function run(){
    document.getElementById('meditation').innerHTML = lines[5];
    changeColor(randomColor());
    setTimeout(run, Math.random()*6000);
}

run();

function randomColor(){
    var colorArray = [
        "#ff0000",
        "#ffa07a",
        "#f08080",
        "#fa8072",
        "#e9967a", 
        "#ff6347",
        "#cd5c5c",
        "#ff4500",
        "#dc143c", 
        "#b22222",
        "#8b0000", 
        "#800000",
        "#ff9999", 
        "#ff6961",
        "#fe6f5e", 
        "#e4717a", 
        "#fd5e53",
        "#e66771",
        "#ff6e4a",
        "#ff5349", 
        "#ff4040",
        "#e97451",
        "#ff5a36", 
        "#cc6666",
        "#ff355e",
        "#eb4c42",
        "#da614e",
        "#ea3c53",
        "#ef3038",
        "#cc4e5c",
        "#e34234",
        "#ed2939",
        "#d73b3e",
        "#d9603b"
       
    ];
    
    return colorArray[Math.floor(Math.random()*colorArray.length)];
}



function changeColor(color){
  document.body.style.background = color;
}
