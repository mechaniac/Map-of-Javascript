//SERVERSIDE



let a = ['a','b','c']

function takesCb(p , callback) {
    
    
    try{
        if(a[p]){
            callback(undefined, a[p])
        } else{
            throw 'error'
        }
        
    } catch(e) {
        callback(e,undefined)
    } finally{
        l('finished')
    }
    
}



// CLIENTSIDE

takesCb(1,(err, c)=>{
    if(err){ 
        l(err);
        return;
    }
    l(c)
})