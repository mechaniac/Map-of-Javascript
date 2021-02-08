

l('ASYNC AWAIT')

var data =['a','b','c']

// function hO(i, cb){
//     if(data[i]){
//         cb(undefined, data[i])
//     } else{
//         cb('err')
//     }
// }
// hO(0, (e,d)=> {if(e){l(e); return} l(d)})


// function myP(i){

//     return new Promise(function(resolve, reject){

//         if(data[i]){
//             resolve(data[i]);
//         } else{
//             reject('err');
//         }
//     })
    
// }
// myP(2).then(
//     (d)=> l(d),
//     (e)=> l(e) 
//     )

    
// async function mA(i){
//     let p = new Promise(function(resolve, reject){
//         if(data[i]){
//             resolve(data[i])
//         }else{
//             reject('err')
//         }
//     })
//     await p
// }
l('start')

var b = false

var p = new Promise((res, rej) =>{
    this.__proto__.then = ()=> {l('fromThen')}
    setTimeout(function(){
    res({
        message: "fully filly",
        code: "wohoo"
    })
    }, 1*1000)
    
})


l(p)


//--------------------------------------------------


function loadScript(src, callback) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    callback(script)
    script.onload
}

//loadScript('./testScript.js', (script)=> l(script + 'callbac') )
const a = document.querySelector('.a')
window.addEventListener('load', e=>l(e.currentTarget))

const data = [1,2,3,4,5,6,7]

function getData(i){
    return new Promise((res, rej)=>{
        try{
            if(data[i] !== undefined){
                res(data[i])
            } else{
                
                rej('err')
            }
        }catch(e){
            rej(e.message)
        }
    })
}

getData(1).then((r)=>getData(r)).then(r=> r).then(r=>l(r)).catch(e=>l(e))

async function ff(){
    return 123;
}
var retP = ff()
l(retP)

async function fff(){
    let p = new Promise((res, rej) =>{
        setTimeout(() => res('doneAwaitaed'), 1000)
    })
    var x = await p;
    l('doneAwaited= ' + x)
}
fff()

async function ffff(){
    let p = new Promise((res, rej) =>{
        setTimeout(() => res('done'), 1000)
    })
    
    var x
    p.then(r => {l(r); x = r})
    l('done = '+ x)
}
ffff()

//When you return something from a then() callback, it's a bit magic. If you return a value, the next then() is called with that value. However, if you return something promise-like, the next then() waits on it, and is only called when that promise settles (succeeds/fails).

// myAs (function* (){
    
//     try{
//         const a = yield new Promise((f,r) => {f(1)})
//         l(`first step: ${a}`)
//         const b = yield new Promise((f,r) => {f(a + 1)})
//         l(`2nd step: ${b}`)
//         const c = yield new Promise((f,r) => {f(b + 2)})
//         l(`result: ${c}`)
//     } catch(e){ }
// })

function myAs(G) {
    var g = G();

    function handle(nxt){
        
        if(nxt.done) {return }
        
        const r = nxt.value
        
        if(r instanceof Promise){
            r.then(res => handle(g.next(res)))
            .catch(err => g.throw(err))
        }
    }

    try{
        handle(g.next())
    }catch(e) {g.throw(e)}
}

//--Promises Static methods------------------------------------------


function f(i, t){return new Promise(res => setTimeout(()=> res(i), t))}
function fe(i, t){return new Promise((res, rej) => setTimeout(()=> rej(new Error('bam')), t))}

Promise.any([
    fe(1,1000),
    f(3,3000),
    f(2,2000)
  ]).then(l).catch(e=> l(e)); // 1,2,3 when promises are ready: each promise contributes an array member



  
Promise.race([
    f(1,1000),
    f(3,3000),
    f(2,2000)
  ]).then(l); // 1,2,3 when promises are ready: each promise contributes an array member