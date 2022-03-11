function checkTypeNumber (givenNumber)
{
    if (typeof givenNumber =="string") {
        console.log('Error : Invalid data type')
    }else if(typeof givenNumber =="object") {
        console.log('Error : Invalid data type')
    }else{
        if (givenNumber % 2 == 0){
            console.log('Genap')
        }else if (givenNumber % 2 == 1){
            console.log('Ganjil')
        }
        return checkTypeNumber;   
    }
}
console.log(checkTypeNumber(10));


// console.log(typeof () );