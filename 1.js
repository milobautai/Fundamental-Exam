
function getMiddle(str){
    var word = str.split('')
    var middle1 = word[(word.length/2)-1]
    var middle2 = word[word.length/2]
    var oddindex = Math.floor(word.length/2)
    var middleodd = word[oddindex]
    if(word.length%2 == 0){
        return middle1 + middle2
    }else{
        return middleodd
    }
}

console.log(getMiddle('Soalnosatu'))