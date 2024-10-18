const fs = require('fs')
const { Command } = require('commander')
const program = new Command()

program
  .name('File related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0')

program.command('count')
  .description('number of words in a file')
  .argument('<file>', 'file to count')
  .action(file) => {
    fs.readFile(file, 'utf-8', (err,data) => {
      if (err) {
<<<<<<< HEAD
        console.error(err);
        return;
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === ' ') {
            words++;
          }
=======
      console.log("error")
    } else {
      let words = 0
      for(i = 0, i <= data.length, i++) {
        if(data[i] === ' ') {
        words++
>>>>>>> parent of 5f4af29 (word counter)
        }
      }
      console.log(`There are ${words +1} words in ${file}`)
    }
  })
  }

<<<<<<< HEAD
program.command('count-sentences')
  .description('Count the number of sentences in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        let sentences = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === '.' || data[i] === '!' || data[i] === '?') {
            sentences++;
          }
        }
        console.log(`There are ${sentences} sentences in ${file}`);
      }
    });
  });

program.parse();
=======
  program.parse();
>>>>>>> parent of 5f4af29 (word counter)
