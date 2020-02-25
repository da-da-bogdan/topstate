let stpbl1 = document.getElementById("stepbl1");
let stpblrd1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpblrd2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpblrd3 = document.getElementById("stepbrdr3");

stpbl1.onmouseover = function() {
    stpblrd1.style.borderBottom = "3px solid white";
}

stpbl1.onmouseout = function() {
    stpblrd1.style.borderBottom = "3px solid black";
}

stpbl2.onmouseover = function() {
    stpblrd2.style.borderBottom = "3px solid white";
}

stpbl2.onmouseout = function() {
    stpblrd2.style.borderBottom = "3px solid black";
}

stpbl3.onmouseover = function() {
    stpblrd3.style.borderBottom = "3px solid white";
}

stpbl3.onmouseout = function() {
    stpblrd3.style.borderBottom = "3px solid black";
}