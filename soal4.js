function isValidPassword(password){
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
};
  console.log(isValidPassword('Meong123'));
