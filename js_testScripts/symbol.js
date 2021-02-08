
// //------------
// var o = {
//     "prop":"val",
//     prop2: "val2",
//     nested:{
//         a:123
//     }
// }

// var c = Object.create(o)

// l(Object.keys(o))
// l(Object.keys(c))


//---------------symbol-----------

// var s = Symbol('s')
// l(s)
// l([s])


const string = 'whatever'
const normalObject = {
    [string]: 'something else'
}

const s = Symbol('a')
const s2 = Symbol('b')
const o = {
    s: 'b'
}


const o2 = {
    [s]: 'b',
    x:'x',
    [s2]: 'b2'
}

l(o2[s2])

// l(o)
// l(o2)
// l(o2[st])

// for(var x in o) {l(x)}

for(var x in o2) {l(x)}


var a = []
// l(a[Symbol.iterator] === undefined)
// l(o2[Symbol.iterator] === undefined)



l(Object.getOwnPropertySymbols(o2))
l(o.a)

let ox = {a:'b'}
let oy = {a:'b'}

l(ox === oy)

var bla = 12

l(undefined ?? bla)


var a = ['a','b','c']

for(var x of a.values()){
    l(x)
}