function stringLength(string) {
     if(string.length >=1 && string.length <=10){
        return "Yes"
     } else  {
        throw "Check your string"
     }
}
  module.exports = stringLength;