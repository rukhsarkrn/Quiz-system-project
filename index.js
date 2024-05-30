#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold("\n***** QUIZ SYSTEM PROJECT *****\n"));
async function askQuestion() {
    const answer = await inquirer.prompt([
        { name: "question1",
            type: "list",
            message: "What is the file extention for TypeScript?",
            choices: [".js", ".ms", ".ts", ".nodejs"]
        },
        { name: "question2",
            type: "list",
            message: "Who is the founder of Microsoft? ",
            choices: ["Mark Johnson", "Mark Zuckerberg", "Tom Cruise", "Bill Gates"]
        },
        { name: "question3",
            type: "list",
            message: "What is the purpose of && operator in typescript?",
            choices: ["Value and type check", "Logical AND", "Logical OR", "Greater than"]
        },
        { name: "question4",
            type: "list",
            message: "What is the value of the square root of 16?",
            choices: ["4", "8", "2", "10"]
        },
        { name: "question5",
            type: "list",
            message: "What is the name of the Islamic festival of sacrifice? ",
            choices: ["Ramazan", "Muharram", "Eid ul Azha", "Eid ul Fitr"]
        },
        { name: "question6",
            type: "list",
            message: "what will be the result of the expression 8 > 5 in typescript?",
            choices: ["True", "False", "Undefined", "Error"]
        },
        { name: "question7",
            type: "list",
            message: "Node.js was initially released in which year?",
            choices: ["2005", "2015", "2010", "2009"],
        },
    ]);
    let points = 0;
    switch (answer.question1) {
        case ".ts":
            console.log("\nQues1: Right Ans");
            points++;
            break;
        default:
            console.log("\nQues1: Wrong Ans");
    }
    switch (answer.question2) {
        case "Bill Gates":
            console.log("Ques2: Right Ans");
            points++;
            break;
        default:
            console.log("Ques2: Wrong Ans");
    }
    switch (answer.question3) {
        case "Logical AND":
            console.log("Ques3 :Right Ans");
            points++;
            break;
        default:
            console.log("Ques3: Wrong Ans");
    }
    switch (answer.question4) {
        case "4":
            console.log("Ques4: Right Ans");
            points++;
            break;
        default:
            console.log("Ques4: Wrong Ans");
    }
    switch (answer.question5) {
        case "Eid ul Azha":
            console.log("Ques5: Right Ans");
            points++;
            break;
        default:
            console.log("Ques5: Wrong Ans");
    }
    switch (answer.question6) {
        case "True":
            console.log("Ques6: Right Ans");
            points++;
            break;
        default:
            console.log("Ques6: Wrong Ans");
    }
    switch (answer.question7) {
        case "2009":
            console.log("Ques7: Right Ans");
            points++;
            break;
        default:
            console.log("Ques7: Wrong Ans");
    }
    if (points >= 5) {
        console.log(chalk.greenBright(`\nYour points are = ${points} out of 7`));
        console.log(chalk.red("\nCongratulations You Win !!!"));
    }
    else {
        console.log(chalk.greenBright(`\nYour points are = ${points} out of 7`));
        console.log(chalk.bgMagenta("\n# You Lose #"));
    }
}
askQuestion();
