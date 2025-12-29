// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.

let database = []
class user {
    constructor(name,email,age,password){
        this.name = name
        this.email = email
        this.age = age
        this.password = password
    }
    signUp(){
        while(true){
            let name = prompt("enter your full name:")
            let trimedName = name.trimStart().trimEnd()
            let capitalFirstLetter = trimedName.replace(/\b\w/g, char => char.toUpperCase());
            function hasSpecialOrNumber(str) {
            const regex = /[^a-zA-Z0-9\s]/;
            return regex.test(str);
            }
            if (capitalFirstLetter.replace(/\s+/g, '').length < 5){
                alert("the name must be 5 charachters at least")
            } else if (hasSpecialOrNumber(capitalFirstLetter) == true){
                alert("name must not conatain numbers or special charachters")
            } else {
                this.name = capitalFirstLetter
                break
            }
        }
        while(true){
            let foundMatch = false
            let email = prompt("enter your email:")
            let trimedEmail = email.trimStart().trimEnd()
            let emailtoLowerCase = trimedEmail.toLowerCase()
            function hasSpaceInMiddle(str) {
            return str.trim().includes(' ');
            }
            function hasExactlyOneAtSymbol(str) {
            const matches = str.match(/@/g);
            return matches !== null && matches.length === 1;
            }
            for (let i = 0 ; i < database.length ; i++){
                if(database[i].email == emailtoLowerCase){
                    foundMatch = emailtoLowerCase
                }
            }
            if (hasSpaceInMiddle(emailtoLowerCase) == true){
                alert("the email must not contain spaces in the middle")
            } else if (hasExactlyOneAtSymbol(emailtoLowerCase) == false){
                alert("the email must have at least one '@'")
            }else if(emailtoLowerCase.replace(/\s+/g, '').length < 10){
                alert("email must contain at least 10 charachters")
            } else if (foundMatch){
                        alert("this email already exists please choose another")
            }
            else {
                this.email = emailtoLowerCase
                break
            }
        }
        while (true){
            let age = prompt("enter your age:")
            let trimedAge = age.trimStart().trimEnd()
            const containsOnlyNumbers = (str) => {
            return /^\d+$/.test(str);
            }
            function hasSpaceInMiddle(str) {
            return str.trim().includes(' ');
            }
            if (trimedAge.replace(/\s+/g, '').length == 0){
                alert("the input can't be empty")
            }
            else if (containsOnlyNumbers(trimedAge) == false){
                alert("you must enter only numbers as your age")
            }
            else if (hasSpaceInMiddle(trimedAge) == true){
                alert("the age can't contain space in the middle")
            } else if (trimedAge.replace(/\s+/g, '').length >= 3){
                alert("enter your true age")
            } else {
                this.age = trimedAge
                break
            }
        }
        while (true){
            let password = prompt("choose your password:")
            function hasSpaceInMiddle(str) {
            return str.trim().includes(' ');
            }
            function containsSpecialChar(str) {
            const specialChars = /[^\w\s]/;
            return specialChars.test(str);
            }
            if (hasSpaceInMiddle(password) == true){
                alert("password can't have spaces in the middle")
            } else if (containsSpecialChar(password) == false){
                alert("password must conatain at least one special charachter")
            } else if (password.length < 7) {
                alert("password must conatain at least 7 charachters")
            } else {
                let checkPass = prompt("re-enter your password")
                if (checkPass == password){
                    this.password = password
                    alert ("sign up successfully")
                break
                } else {
                    alert("password is not compatible")
                }
            }
        }
            database.push(this)
            console.log(database);
    }
    login(data){
        let email = prompt("enter your email")
        let password = prompt("enter your password")
        for (let i = 0; i < database.length ; i++){
            if (email == data[i].email && password == data[i].password){
                alert("you are logged in")
            } else {
                alert("wrong email or password")
            }
        }
    }
    changePassword (data){
        let email = prompt("enter your email to change password")
        for (let i = 0; i < data.length ; i++){
            if (data[i].email == email){
                let oldPassword = prompt("enter your old password")
                if (oldPassword == data[i].password){
                    let newPassword = prompt("enter your new password")
                    data[i].password = newPassword
                    alert("password has been changed")
                }else{
                    alert ("old password is not correct")
                }
            } else {
                alert("there no such email")
            }
        }
    }
}

let amine = new user
while (true) {
    let answer = prompt("Choose one option below:\n1-login\n2-sign up\n3-change password\n4-exit")
    if (answer == 2) {
        amine.signUp()
        }
        else if (answer == 1) {
        amine.login(database)
    } else if (answer == 3){
        amine.changePassword(database)
    } else if (answer == 4){
        break
    } else {
        alert("please choose a valid option")
    }
}




//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.