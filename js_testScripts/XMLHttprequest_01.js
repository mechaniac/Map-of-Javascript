var r = new XMLHttpRequest()
r.onreadystatechange = f;
r.open('GET', 'file.json')
r.send()



function f(){
    if(r.readyState === XMLHttpRequest.DONE){
        if(r.status === 200){
            console.log(r)
            
        } else{
            console.log('xml errr')
        }
    }
}