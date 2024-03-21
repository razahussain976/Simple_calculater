#! /usr/bin/env node
 import inquirer from "inquirer";

    const answer = await inquirer.prompt([
        {message: "Enter your first number", type:"number" ,name: "firstNumber"},
        {message: "Enter second number", type:"number" ,name: "secondNumber"},
        {message: "Select one of the operater to perform operation", type:"list" ,name: "operater", choices:["Addition", "Subtraction", "Multiplication","Division"],
    },

    ])

    if (answer.operater === "Addition"){
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operater === "Subtraction"){
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operater === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operater === "Division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }
    else{
        console.log("Please select valid operater");
    };
    console.log("THE END");