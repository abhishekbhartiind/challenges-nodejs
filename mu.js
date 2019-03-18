const data = [{
    company:"HP",
    product: "keyboard",
    date: "25th June",
    sales: 200
},{
    company:"DELL",
    product: "laptop",
    date: "18th June",
    sales: 400
},{
    company:"HP",
    product: "laptop",
    date: "28th June",
    sales: 500
},{
    company:"Lenovo",
    product: "mouse",
    date: "25th June",
    sales: 300
}]

const ans = data.sort((a,b) => b.sales - a.sales)[0]
console.log(ans,  ans.date)

var scope ="abhishek"
function innner(){
    var scope = "bharti"
    console.log("inner ", scope)
}
innner()
console.log(scope)