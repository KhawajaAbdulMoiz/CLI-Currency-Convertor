#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
const currency : any = {

    USD : 1,
    EURO : 0.92,
    INR : 83.28,
    PKR : 278.12,
    RIYAL : 3.75,
    POUND : 0.79,
    AUD : 1.52,
    CAD : 1.36,
    RUB : 92.58,
    
}
console.log(chalk.bgBlueBright.black("-------------------CURRENCY CONVERTOR-----------------\n"));

let user_input = await inquirer.prompt(
    [
        {
            name:"input",
            message:chalk.bgGray("Select Currency : "),
            type: "list",
            choices:["USD","EURO","INR","PKR","RIYAL","POUND","AUD","CAD","RUB"]
        },
    
        {
        name:"input_to",
        message:chalk.bgGreen("To Currency : "),
        type: "list",
        choices:["USD","EURO","INR","PKR","RIYAL","POUND","AUD","CAD","RUB"]
        },

        {
        name:'amount',
        message:chalk.red("Enter Amount : "),
        type: 'number',
       
        }
    ],
    
    )
let selectAmount = currency[user_input.input];
let ToAmount = currency[user_input.input_to];
let amount=user_input.amount;
let baseAmount = amount/selectAmount;
let convertedAmount = baseAmount*ToAmount;
console.log(convertedAmount);




    