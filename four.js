const pro = {
  name: "abhishek",
  getArrowName: () => {
    console.log(this.name, this)
  },
  getName: function () {
    console.log(this.name, this)
  },
}

pro.getName() //abhishek
pro.getArrowName()
//undefined pro.gerArrowName

//---------------------------------
let x = [1, 2, 2, 4, 2, 4]
let maxNum = Math.max(...x)
let acc = 0
for (let i = 0; i < x.length; i++) {
  if (maxNum === x[i]) {
    acc = acc + 1
  }
}

console.log(acc)

var s = "#hallo, this is a test #john #doe"
var re = /(?:^|\W)#(\w+)(?!\w)/g,
  match,
  matches = []
while ((match = re.exec(s))) {
  matches.push(match[1])
}
console.log(matches)
