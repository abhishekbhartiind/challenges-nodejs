// Complete the commonChild function below.
// s1 and s2 of same length
function commonChild(s1, s2) {
    var ans = [];
    for(let i=0; i<s1.length;i++){
        ans.push(new Array(s2.length).fill(0))
        // assign array s2 with 0
        if(s1[i] === s2[0]){
            ans[i][0] = 1;
        }
    }
    for(let i=0;i<s2.length;i++){
        if(s2[i] === s1[0]){
            ans[0][i] = 1;
        }
    }

    for (let i = 1; i < s1.length; i++) {
        for (let j = 1; j < s2.length; j++) {
            if(s1[i] === s2[j]){
                ans[i][j] = ans[i-1][j-1] + 1
            }else{
                ans[i][j] = Math.max(ans[i-1][j-1], ans[i][j-1], ans[i-1][j])
            }
        }        
    }
    return ans[s1.length -1][s2.length -1];
}
commonChild("SHINCHAN","NOHARAAA")