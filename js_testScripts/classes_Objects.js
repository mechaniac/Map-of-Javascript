
function F(p){
    this.x = p;
}

var f = new F(1)

class C{
    static MY_C ='x'
    #y = 12;
    constructor(x){
        this.x = x;
    }
    sum(){
        return this.x + this.#y;
    }
}

const c = new C(2)

l(C.prototype.__proto__ === Object.prototype)
l('c:')
l(c.__proto__ === C.prototype)

var o = {
    x: 2
}

l(o)

l(f)
l('f')
l(f.__proto__ === F.prototype)
l(Object.getPrototypeOf(f))

l(F)

l(o.__proto__ === Object.prototype)

l(F.prototype.__proto__ === Object.prototype)
l(F.__proto__ === Function.prototype)
l(Function.prototype === Function.__proto__)
l(Object.__proto__ === Function.prototype)

l(C.prototype.constructor === C)
l(c.__proto__ === C.prototype)



//l(c.#y)  // => Syntax Error
l(c.sum())

C.MY_C = 'b'
l(C.MY_C)

l("ab".localeCompare("a"))

class B {
    #a = 3;
    get a(){
        return this.#a
    }
    set a(a){
        this.#a = a
    }
}

const b = new B()

l(b.a)
b.a = 12
l(b.a)

class D extends B{}

const d = new D()

d.a = 13
l(d.a)