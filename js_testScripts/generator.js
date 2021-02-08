function* myGenerator(){
    l('a')

    yield 12;

    l('b')

    yield 22;
}

let g = myGenerator()



//l(g)



// l( g.next())
// l( g.next())
// l( g.next())




let g2 = myGenerator()

// for(const x of g2){
//     x.value;
// }
function objectify(key, value){
    let o = {}
    o[key] = value
    return o
}

function objectify2(key,value){
    return{
        [key]: value
    }
}

let myO = objectify2('name', 'theC')
//l(myO)


const o = {
    oi:{
        a:['a1'],
        b:['b1','b2'],
        c:['c1','c2','c3'],
    },

    [Symbol.iterator]() {
        const ra = Object.values(this.oi);

        let ia = 0;
        let i = 0;

        return {
            next() {

                if(i>=ra[ia].length) {
                    ia++
                    i = 0
                }
            
                if(ia<ra.length){
                    return {value: ra[ia][i++], done: false}
                    
                }
                return {value: undefined, done: true}                         
               }
        }
    }
}


for(const x of o){
    l(x)
}

l(...o)

let m = new Map([[1, 'a'],[2, 'b'],[3, 'c']])
l(m)
  
let a = new Array('a','b','c')
l(a)
var xy = 0;
l(xy++)