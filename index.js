const chalk = require('chalk');
const rs = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "1. Who had composed the original Ramayana?",
    options: "a: Rishi Valmiki, b: Tulsi Das, c: Sant Ek Nath",
    a: "a",
  },
  {
    q: "2. Lakshmana is considered to be the incarnation of whom?",
    options: "a: Lord Vishnu, b: Lord Shiva, c: Sheshnag ",
    a: "c",
  },
  {
    q: "3. Ravana was a devotee of who among the following God?",
    options: "a: Vishnu, b: Brahma, c: Shiva",
    a: "c",
  },
  {
    q: "4. What was the name of Lord Rama's father?",
    options: "a: Shalishuka, b:  Dasaratha, c: Rajadhiraj",
    a: "b",
  },
  {
    q: "5. What was the name of a bow that was used by Lord Rama in Goddess Sita swayamvar to marry her?",
    options: "a: Pinaka, b: Pindaka, c: Anandaka",
    a: "a",
  },
 
];

const validOptions = ['a', 'b', 'c'];

function askQuestion(question) {
  console.log(chalk.green(question.q), "\n");
  const answer = rs.question(chalk.cyan(question.options + "\n"));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.yellow("You are right ! "));
      console.log(chalk.cyan("Your score is "), chalk.bold.green(++score));
    } else {
      console.log(chalk.redBright("Wrong answer !"));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options", validOptions));
    askQuestion(question);
  }
  console.log("\n")
}

console.log(chalk.yellow("Welcome to How much you know about great epic RAMAYANA!"));

var userName = rs.question("What's Your name? ");

console.log("Hi " + userName + "  Let's begin,  " + "Select correct options from following");

for (var i = 0; i < questions.length; i++) {
  askQuestion(questions[i]);
}

console.log(chalk.cyan("Well Played..."))
console.log("Your final score is ", chalk.bold.yellow(score))
