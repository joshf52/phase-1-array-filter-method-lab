// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase())!== -1
    })
}

function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(driver => driver.slice(0,string.length) == string)
    return correctLetters
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }