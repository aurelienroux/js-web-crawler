import readline from "node:readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  console.log(chalk.blue("*** Welcome to web crawler ***"));

  rl.question(chalk.blue("Enter the website's url: "), (url) => {
    try {
      if (url.split(" ").length !== 1) {
        throw new Error("Please enter only one url");
      }

      console.log("Starting crawling of:", url);
      rl.close();
    } catch (error) {
      console.log(error);
      rl.close();
    }
  });
}

main();
