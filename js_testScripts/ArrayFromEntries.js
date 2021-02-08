
var a = new Array('a','b','b')

l(a)

var m = new Map([[1,'a'],[2,'b'],[3,'b']])
// v
l(m)

var s = new Set(['a','b','b'])

l(s)

const sm = Object.fromEntries(m)
l(sm)
const sa = Object.fromEntries(a.entries())
l('arrrr')
l(sa)
// const ss = Object.fromEntries(s)


const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }


// l(sa)
// l(sm)
// l(ss)

const o ={a:'a',b: 'b'}
l('emn')
var oaoa = Object.entries(o)
l(typeof(a))
l(Array.isArray(oaoa))

l(o)
l(oaoa)

const {a:myA, b:myB} = o;

l(myA)

const s1 = Symbol('a')
const s2 = Symbol('a')

l(Symbol('a') === Symbol('a'))



const aa = Array.from(Array(5).keys(), x=> x*2)
l(aa)


var ax = {
    'prop': 'val',
    prop2: 'val2',
    'nested':{'a':123}
}

l(Object.entries(ax))