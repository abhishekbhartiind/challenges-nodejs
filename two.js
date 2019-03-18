const a = [1,2,5,7,9]
const b = [2,5,7,12,50,60,66, 70, 80, 90, 100]

const c = a.concat(b).sort((a,b) => b>a)
console.log(c)

// -------------------------------------------

const obj = {
    x:1,
    getX(){
        const inner = function(){
            console.log('-', this.x)
        }
        //inner()
        inner.call(this);
    },
    getY(){
        const inner = () => {
            console.log('--',this.x)
        }
        inner()
    }
}

obj.getX();
obj.getY();

// ---------------------------------------------------

let arr = [1,2,5,7]

const ans = arr.reduce((acc,item)=> acc+item, 0)
console.log(ans);

// ---------------------------------------------------

add = (x, y) => {
    if(x && y) {
        return x+y
    }else{
        return (z) => {
            return x+z
        }
    }
}

console.log(add(1)(2), '--', add(1,2))

// ---------------------------------------------------

const ary = [1-100] // 1 number is missing

// let len = ary.length
// let total = n*(n+1)/2
// let arrayT = ary.reduce((t,i) => t+1)
// console.log(total - arrayT)

console.log(Array.from(Array(10).keys()))
console.log([...Array(10).keys()])

const ab = [1,2,5,7,9]
var shallow = ab.slice()
console.log(shallow)

//-----------------
var a1 = [0, 1, 3, 4, 5, 6, 7, 8, 9]
let total = [...Array(10).keys()].reduce((a,b) => a+b, 0)
let newa1 = a1.reduce((a,b) => a+b)
console.log(total-newa1)

//---------------------
var a2 = [189459, 189460, 189461, 189463, 189465];
var [min, max] = [Math.min(...a2), Math.max(...a2)]
var out = Array.from(Array(max-min),(v,i) => i+min)
            .filter(i => !a2.includes(i))
console.log(out)

// function missing(nums){
//     const nArr = nums.sort((a, b) => b-a)
//     console.log(nArr)
//     for(let i=0; i< nArr.length; i++){
//         if(i !== nArr[i]){
//             return i
//         }
//     }
// }
// console.log("s ", missing(a2))