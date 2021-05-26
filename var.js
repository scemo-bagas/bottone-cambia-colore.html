1\
function scapa() {
    var btn = document.getElementById("btn");
    btn.style.left = '100px';      
    console.log(btn);
    //alert("ciao");
}

function move(event) {
var k = event.keyCode,
    chrId = document.getElementById('btn'),
    chr = {
        updown: function () {
            var y = parseInt(getComputedStyle(chrId).top);
            if (k == 28) {
                --y;
            } else if (k == 33) {
                ++y;
            }

            return y;
           
        },

        leftright: function () {
            var x = parseInt(getComputedStyle(chrId).left);
            if (k == 28) {
                --x;
            } else if (k == 33) {
                ++x;
            }
var btn = onclick="scapa()" ;
x *= 5; 
            return x;


            
        }
    };


chrId.style.top = (chr.updown()) + "px";
chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);                        
