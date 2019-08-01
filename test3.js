
//for string uniqueness
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

function doubleAttributes(relations, indexStart, indexEnd){
  var possibleCandidate = 0
  var values = []

  relations.map((relation)=> {
    values = [...values, `${relation[indexStart]} ${relation[indexEnd]}`]
  })

  if (values.unique().length === relations.length) possibleCandidate +=1

  return possibleCandidate
}

function singleAttributes(relations) {
  var possibleCandidate = 0
  var ids = []
  var names = []
  var majors = []
  var grades = []

  relations.map((relation)=>{
    ids = [...ids, relation[0]]
    names = [...names, relation[1]]
    majors = [...majors, relation[2]]
    grades = [...grades, relation[3]]
  })

  columns = [ids, names, majors, grades]

  columns.map((attributes) => {
    if (attributes.unique().length === relations.length) return possibleCandidate +=1
  })

  return possibleCandidate
}

function solution(relations) {
  var answers = 
    singleAttributes(relations) +
    // doubleAttributes(relations, 0, 1) +
    // doubleAttributes(relations, 0, 2) +
    // doubleAttributes(relations, 0, 3) + 
    doubleAttributes(relations, 1, 2) +
    doubleAttributes(relations, 1, 3) +
    doubleAttributes(relations, 2, 3) 

  return answers
}

//id, name, major, grade
//0, 1, 2, 3
const relations = [
                  ["100","ryan","music","2"],
                  ["200","apeach","math","2"],
                  ["300","tube","computer","3"],
                  ["400","con","computer","4"],
                  ["500","muzi","music","3"],
                  ["600","apeach","music","2"]
                ]
console.log("answers=>> ", solution(relations))


