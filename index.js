const readline = require('readline');
const { exec } = require('child_process');
const fs = require('fs');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.readdir('exercises/', (err, files) => {
  if (err) {
    console.error(`Error listing files: ${err}`);
    return;
  }

  const jsFiles = files.filter(file => file.endsWith('.js'));

  console.log('JavaScript files available:\n');
  console.log(jsFiles.map(file => chalk.yellow(file)).join('\n'));

  rl.question('\nWhich JavaScript file do you want to run? ', (answer) => {
    const file = `exercises/${answer}`;
    const cmd = `node ${file}`;

    exec(cmd, (error, stdout) => {
      if (error) {
        console.error(`Error executing file: ${error}`);
        return;
      }
      console.log('\n' + chalk.yellow(stdout));
    });

    rl.close();
  });
});
