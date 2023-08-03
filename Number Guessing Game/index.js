#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("Welcome to the Number Guessing Gmae \n Choose the No between 1-1000");
    await sleep();
    rainbowTitle.stop();
}
let score = 1;
await welcome();
const GuessingGame = async (score) => {
    let randomNo = Math.random() * 1000;
    randomNo = Math.round(randomNo);
    while (true) {
        const userNo = await inquirer.prompt([
            {
                type: "number",
                name: "userInput",
                message: chalk.yellow("Enter your No"),
            },
        ]);
        const { userInput } = userNo;
        if (randomNo === userInput) {
            console.log(chalk.green("You Guess the right No. "));
            console.log("You guess the No in", score, "attempts");
            break;
        }
        else if (userInput > randomNo) {
            console.log(chalk.red("Your No is greater than orignal number."));
        }
        else if (userInput < randomNo) {
            console.log("Your No is less than orignal number.");
        }
        score++;
    }
};
GuessingGame(score);
