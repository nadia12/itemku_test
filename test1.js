
function generateWords(record, nameRecords){
  var words = {
    dictionaries: {
      'Enter': 'came in',
      'Leave': 'has left'
    }, 
    generate: function() {
      arrWords = record.split(' ')
      verb = this.dictionaries[arrWords[0]]
      nickname = nameRecords[arrWords[1]]
      if(!!verb) return [nickname, verb].join(' ')
    }
   }

  return words.generate() 
}

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

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))