const pro = {
    name: 'abhishek',
    getArrowName: () => {
        console.log(this.name)
    },
    getName: function(){
        console.log(this.name)
    }
}

pro.getName() //abhishek
//undefined pro.gerArrowName

//---------------------------------
let x = [1, 2,2 ,4, 2,4]
let maxNum = Math.max(...x)
let acc = 0;
for(let i=0; i< x.length;i++){
    if(maxNum === x[i]){
        acc = acc+1
    }
}

console.log(acc)