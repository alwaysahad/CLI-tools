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
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === ' ' || data[i] === '\n' || data[i] === '\t') {
            words++;
          }
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });

program.parse();
