  function validateEmail (email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email==null){
        return `Error : Bro Where is the parameter?`
      }else if(email.includes("@")){
        return regex.test(email) ? "VALID" : "INVALID";
      }else if(!email.includes("@")|| !email.includes(".")) {
        return `Error : email harus memiliki karakter "@" dan "."`;
      }else if (!email.includes("@")) {
        return `Error :email harus memiliki karakter "@"`;
      }else {
        return `Error  : Masukkan format email uang benar Ex : maya@gmail.com`;
      }
    }

console.log(validateEmail("maya2gmail.com"))