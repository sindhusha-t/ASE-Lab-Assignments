const fs = require('fs');
const path = require('path');


var login =function(user, email, password){


    let rawdata = fs.readFileSync(path.join(__dirname, './student.json'));
    let student = JSON.parse(rawdata);

    console.log(user, email, password);
    console.log(student[user].email);

    if(email===student[user].email && password===student[user].password){
        return student[user];
    }
    else{
        return undefined;
    }

}

module.exports=login;
