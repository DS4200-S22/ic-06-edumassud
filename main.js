/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    let random_num = 100 * Math.random().toFixed(2);
    document.getElementById("random_num").innerHTML = random_num;
}

function button2Clicked() {
    console.log(document.getElementById("circle").style.fill);
    if (document.getElementById("circle").style.fill == "blue") {
        document.getElementById("circle").style.fill = "green";
    }
    else {
        document.getElementById("circle").style.fill = "blue";
    }
}