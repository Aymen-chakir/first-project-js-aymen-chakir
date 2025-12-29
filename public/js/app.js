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
let data = []
let name, email, age, password;
let account = prompt(
  "1 - Sign up\n" +
  "2 - Login\n" +
  "3 - Change password\n" +
  'Type "exit" to cancel'
);
if(account ==="1"){
  name = prompt("Name:");
 email = prompt("Email:");
 age = prompt("Age:");
password = prompt("Password:");
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.
function detailsofname(name){
  
  name = name.trim();
  
  // 2
  name = name[0].toUpperCase() + name.slice(1);
// 3
let words = name.split(' ');

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
}

name = words.join(' ');
  
    let letter = 0;
for (let i = 0; i < name.length; i++) {
    if (name[i] !== ' ') letter++;
}
if (letter < 5) {return "Name is too short",
alert("Name is too short")
}
else {
   return "name valid",
   alert("name valid")
};

}
function Characters(name) {
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (!(( char == '@')  || char === ' ')) {
            return "Name is valid";
        }else{
              "Name contains invalid characters";
        }
    }
}
data.push(name)
// console.log(name);   


// Example:
//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.
let acct = []
function validateEmail(email) {

    let lowerEmail = email.toLowerCase(); 
// 
    if (email !== lowerEmail.trim()) {
        return { valid: false, message: "Email has leading or trailing spaces" };
    }
// 
    email = lowerEmail;
// 
    if (email.includes(" ")) return { valid: false, message: "Email cannot contain spaces" };
// 
    if (email.length < 10) return { valid: false, message: "Email is too short" };
// 
    let atCount = email.split("@").length - 1;
    if (atCount !== 1) return { valid: false, message: "Email must contain exactly one @" };
// 
    let exists = acct.some(acc => acc.email === email);
    if (exists) return { valid: false, message: "Email already used" };

    return { valid: true, email };
}

  let result = validateEmail(email);

if (result.valid) {
    alert("Email saved: " + result.email);
} else {
    alert(result.message);
}
data.push(email)
// console.log(email);

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.
function validateAge(age) {

    if (age.includes(" ")) return { valid: false, message: "Age cannot contain spaces" };

    if (!(/^\d+$/.test(age))) 
    return { valid: false, message: "Age must contain only digits" };
if (age.length === 0) 
    return { valid: false, message: "Age cannot be empty" };
if (age.length >= 3) 
    return { valid: false, message: "Age cannot have 3 or more digits" };

    return { valid: true, age: Number(age) };
}
let ageResult = validateAge(age);

if (ageResult.valid) {
    alert("Age saved: " + ageResult.age);
} else {
    alert(ageresult.message);
}
data.push(age)
// console.log(age);


//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.
function validatePassword(password) {
    password = password.trim();

    if (password.includes(" ")) {
        return "Password cannot contain spaces in the middle";
    }

    if (password.length < 7) {
        return "Password must be at least 7 characters";
    }

    // check spécial characters
    let specialChars = ["@", "#", "-", "+", "*", "/"];
    let hasSpecial = specialChars.some(char => password.includes(char));
    if (!hasSpecial) {
        return "Password must contain at least one special character (@, #, -, +, *, /)";
    }

    return "Password is valid";
}
//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

if(!validatePassword(password)){
  alert("password not valid")
}else{
  let confirm = prompt("3awd dakhl password");
  if(confirm === password){
    alert('bravo howa hadak')
  }else{
    alert("you are blokedd password not match")
  }
}
data.push(password)

// console.log(password);
console.log(data);
}
if(account === "2"){
  alert("login")
//         ! If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.

//             # Password:
//             - Check if the entered password is associated with the previously entered email.
function login(){
   
    let passwordLogin = prompt("Enter your password:");
 let accoun = data.find(acc => acc.email === emailLogin);
    if(!accoun){
        alert("Email not found!");
        return;
    }

    if(accoun.password !== passwordLogin){
        alert("Wrong password!");
        return;
    }

    alert("Welcome back" + accoun.name);
}
}
if (account === "3") {
  alert("Change password");
}

if (account === "exit") {
  alert("Exit");
}



//         & If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         ? After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
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
