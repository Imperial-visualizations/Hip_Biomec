/*
 * Create your visualisation here! 
 * This file is already linked in the HTML file so you don't need to do anything
 * 
 */

/*
* P5.JS 
*/

const p5instance = function(p){
    let num = 2000;
    let range = 6;
    let ax = [];
    let ay = [];

    p.setup=function(){
        p.createCanvas(300,300);
        p.background(230);
        for ( let i = 0; i < num; i++ ) {
            ax[i] = p.width / 2;
            ay[i] = p.height / 2; 
        }
    }
    p.draw = function(){
        p.background(240);
        for ( let i = 1; i < num; i++ ) {
            ax[i - 1] = ax[i];
            ay[i - 1] = ay[i];
        }
        ax[num - 1] += p.random(-range, range);
        ay[num - 1] += p.random(-range, range);
        ax[num - 1] = p.constrain(ax[num - 1], 0, p.width);
        ay[num - 1] = p.constrain(ay[num - 1], 0, p.height);
        for ( let j = 1; j < num; j++ ) {
            let val = j / num * 204.0 + 51;
            p.stroke(0);
            p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        }
    }
}

const p5i = new p5(p5instance,"p5-div"); 


/*
*   Plotly
*/

let plot = {
    x: [0,1,2,3,4,5,6],
    y:[0,1,4,8,16,25,36],
    type:"scatter"
};
Plotly.newPlot("plotly-div",[plot,]);

/*
 * Interactive buttons
 */

document.getElementById("click_me_button").onclick= function(){
    alert("You clicked the button");
}
document.getElementById("other_button").onclick = function(){
    // Use let to declare variables in ES6 Javascript
    let name = prompt("What is your name?");

    // Javascript supports string conctatenation!
    alert("Hello " + name);
}