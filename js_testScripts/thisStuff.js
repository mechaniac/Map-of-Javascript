function forEach(l, cb) {
    for (var n = 0; n < l.length; n++) {
      cb.call(l[n], n);
    }
  }

  var weapons = [ { x: 'a' },
                  { x: 'b' },
                  { x:'c' }];

  forEach(weapons, function(index) { console.log( this === weapons[index] )});

  ////////////////////////////////

  var mO={ a: 1}

  function f(o,cb){
      
      cb.call(o)
  }

  f(mo,function(){console.log(this)})

  o2 = {
      a:12,
    f: (mo,()=> console.log(this)),
    f2 (){ console.log(this)}
  }
  

  o2.f()
  o2.f2()


  let me = { 
    name: "Ashutosh Verma", 
    thisInArrow:() => { 
    console.log(this); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log(this); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();


   function MyObject(p){
           this.n=p
           this.f1 = ()=> console.log(this)
           this.f2 = function(){console.log(this)}
   }

   var o = new MyObject('a')

   o.f1()
   o.f2()








   
  