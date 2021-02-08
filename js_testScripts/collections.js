
var m = new Map([[1,'a'],[2,'b'],[3,'c']])

l(m.get(1))
l(m.size)
m.set(4,'d')
l(m)


var a = new Array('a', 'b', 'c')
l(a)

var o = {'0':'a',
'1':'b',
'2':'c'}

l(o)

//m.clear()
l(m)

let myO = {x: 'y'}

m.set(myO, 'e')

l(m)

m.delete(2)
l(m)

l('keys: ')

for(let k of m.keys()){
    l(k)
}

l('values: ')


for(let k of m.values()){
    l(k)
}

l('entriess: ')


for(let k of m.entries()){
    l(k)
}


l('forEach : ')

m.forEach((v,k,m) =>{
    l(`v: ${v}, k: ${k}, m: ${m}`)
})

//-------------------------------------------------------

let aa = ['a', 'b', 'c']

let mm = new Map(Object.entries(aa))

l(aa)
l(mm)

let ooo = Object.fromEntries(mm)

l(ooo)

//++++++++++++++++++++++++++++++++

var s = new Set(['a', 'b', 'c'])

l(s)

l('entries: ')
for(var x of s.entries()){
    l(x)
}

l('keys: ')
for(var x of s.keys()){
    l(x)
}

l('values: ')
for(var x of s.values()){
    l(x)
}


l('s: ')
for(var x of s){
    l(x)
}



