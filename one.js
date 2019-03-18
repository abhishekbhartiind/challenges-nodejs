let x = {
    a: 1,
    b: 2
}

const ans = Object.values(x)
const xAr = []
for(let i in x){
    xAr.push(i)
}
console.log(ans, xAr)
// for multi dimentional obj/array  
const ans2 = Object.entries(x)
console.log("\n", ans2);

// ---------------------------------------------------

let y = "abhishek"
let z = "kehsihba"

const rev = (str) => str.split('').reverse().join('')
console.log(rev(y));

let cd = "this a letter"
const cdr = (sr) => sr.split('').reverse().join('')
console.log("rev \t", cdr(cd))

function rever(str) {
    let r = "";
    for(let char of cd){
        r = char + r;
    }
    return r
}
console.log("rev \t",rever(cd))
// ----------------------------------------------

const obj = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a)
        return this
        // returning obj back
    },
    getB(){
        console.log(this.b)
    }
}
console.log(obj.getA().getB()); // run but undefined

// ---------------------------------------------




Array.prototype.print = (ab) => {
    return ab
}
[1, 2].print();

// -----------------------------------------------

const a = function(x){
    this.x = x
}
a.prototype = { 
    getX(){
        return this.x
    }
}

const b = function(x, y){
    this.y = y
    a.call(this, x)
    b.prototype = {
        getY(){
            return this.y
        }
    }
}

const newB = new b('x', 'y');
//newB.getX()
//newB.getY()

// ------------------------------------------

const nobj = {
    a: {
        b: {
            c:1
        }
    }
}
e = JSON.stringify(nobj)
console.log(e, '\n')
console.log(JSON.parse(e))
// const clone = Object.assign({}, obj)
// console.log('clone ',  clone)