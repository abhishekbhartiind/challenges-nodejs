// Complete the climbingLeaderboard function below.

function climbingLeaderboard(scores, alice) {
    let scoreTOP = [...new Set(scores)];
    let rank = scoreTOP.length -1;
    let results = [];
    for(let i=0; i< alice.length; i++){

        while(alice[i] > scoreTOP[rank] && rank >0){
            rank--
            console.log(alice[i] , scoreTOP[rank])
        }
        if(alice[i] >= scoreTOP[rank]){
            results.push(rank+1)
        }else{
            results.push(rank+2)
        }
    }
    console.log(results)
    return results;
}
climbingLeaderboard([100, 90, 90, 80, 75, 60],[50, 65, 77, 90, 102])