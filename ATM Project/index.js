import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Please Enter your Id: ",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Your Pin: ",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type ",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["FastCash", "Withdraw"],
        message: "Select Your Transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "withdrawaAmount",
        choices: [1000, 2000, 3000, 5000, 10000, 15000, 20000],
        message: "Select Your amount ",
        when(answers) {
            return answers.transactionType == "FastCash";
        },
    },
    {
        type: "number",
        name: "withdrawaAmount",
        message: "Enter Your amount:  ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    },
]);
console.log(answers);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
}
