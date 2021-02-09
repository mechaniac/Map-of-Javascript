"use strict";
const l = console.log


var x = 12;
l(Number.isNaN(x))



l(x.toExponential(3)) 

function f(x){
    return x*2
}

l(f.toString())

var a = [1,2,3]

l(a.find(x => x<3))