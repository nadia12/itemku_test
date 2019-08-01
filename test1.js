
// we need to generate words from record, ex: Prodo came in => username, verb
function generateWords(record, nameRecords){
  var words = {
    dictionaries: {
      'Enter': 'came in',
      'Leave': 'has left'
    }, 
    arrayWords:  record.split(' '),
    generate: function() {
      username =  nameRecords[this.arrayWords[1]],
      verb = this.dictionaries[this.arrayWords[0]]
      if(!!verb) return `${username} ${verb}`
    }
   }

  return words.generate() 
}

// {[id]: username}
function usernameRecords(records) {
  var nameRecords = {}

  records.map((record) => {
    arrWords = record.split(' ')

    if(!!arrWords[2]){
      return nameRecords = {
        ...nameRecords,
        [arrWords[1]]: arrWords[2]
      }
    }

  })

  return nameRecords
}

function solution(records) {
 var nameRecords = usernameRecords(records)
 var answers = records
                .map((record) => generateWords(record, nameRecords))
                .filter((answer) => !!answer) //filter undefined

 return answers
}


var records =["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
console.log(solution(records))