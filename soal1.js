function changeWord (selectedText, changeText, text)
{
    return kalimat1.replace(selectedText,changeText);  //replace() untuk mengganti kata
}
    const kalimat1 = 'Andini sangat mencintai kamu selamanya'
    const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu'
console.log(changeWord('mencintai', 'membenci', kalimat1));  