"use strict";

const e = () => l(this)

var l = console.log;

const o = {
    a: 1,
    b () {
        l(this)
    },
    c : () => {l(this)},
    d: d,
    e: e
}

function Mo(p){
    this.a = p
    this.b = function(){l(this)}
    this.c =()=> l(this)
    this.d = d
    this.e = e
}

function d(){
    l(this)
}

const mo = new Mo(12)

l('o: --------------------')

o.b()
o.c()
o.d()
o.e()

//const mo2 = new Mo(33)
//mo2.b()

l('mo: --------------------')

mo.b()
mo.c()
mo.d()
mo.e()

l('MO :--------------------')



d()
e()

