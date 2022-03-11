function getSplitName(personName){
    var names=personName.split(' ');
    if (names.length == 3) {
        console.log({firstname: names[0], middlenames: names.slice(1, -1).join(' ') , lastname: names[names.length - 1]}); 
      }
      else if (names.length == 2 ) {
        console.log({firstname: names[0], middlenames: null, lastname: names[names.length - 1]});
      }
      else if  (names.length == 1 ) {
        console.log({firstname: names[0], middlenames: null, lastname: null});
      }
      else{
         console.log('Error : This function is only 3 characters name') 
      }
}
console.log(getSplitName("Aldi arifi"));