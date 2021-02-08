// l('sync')

// setTimeout(_=> l('sto'))

// Promise.resolve().then(_=> l('p'))

// l('sync')

// //PROMISES

// const p = fetch(('https://jsonplaceholder.typicode.com/todos/1'))

// p.then(res => res.json())
// .then()
// .then(user => l(user.title))
// .catch(err => l(err))


let tick = Date.now();
const log = (v) => { l(`${v} \t Elapsed: ${Date.now() - tick}`); tick = Date.now()}

const codeBlocker = ()=> {
    let i = 0;
    while(i< 100000000){i++}

    return '1 Billion Loops'
}

const codeBlockerPromiseBad = () => {
    return new Promise((resolve, reject)=>{
        let i = 0;
        while(i< 100000000){i++}

        resolve('1 Billion Loops')
    })
}

const codeBlockerPromiseGood = () => {
    
    return Promise.resolve().then( v=>{
        let i = 0;
        while(i < 1000000000){i++}
        return '1Billon Loops'
    })
}

// log('codeBlocker Start')
// log(codeBlocker())
// log('End')


// log('codeBlockerPromiseBad Start')
// codeBlockerPromiseBad().then(log)
// log('End')



log('codeBlockerPromiseGood Start')
codeBlockerPromiseGood().then(log)
 

l(Promise.prototype)