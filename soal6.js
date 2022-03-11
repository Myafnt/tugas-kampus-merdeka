function getAngkaTerbesarKedua(personName){
    const data=[]
    new Set(dataAngka).forEach((item)=>data.push(item))
    return data.sort((a,b)=>b-a)[1]
}
const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log (getAngkaTerbesarKedua(dataAngka))