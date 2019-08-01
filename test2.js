function solution(N, users) {
  var answer = [];
  var list = {}
  var currentUsers = users.length

  for(let stage = 1; stage <= N; stage++ ){
    playersOnStage = users.filter((userStage) => userStage === stage).length
    list = {
      ...list,
      [stage]: playersOnStage / currentUsers
    }
    currentUsers = currentUsers - playersOnStage
  }

  //descending sorting
  answer = Object.keys(list).sort(function(a,b){return list[b]-list[a]})

  return answer
}

var stage = 5
var users = [2,1,2,6,2,4,3,3]
console.log(solution(stage, users))