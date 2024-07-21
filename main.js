const fs = require('fs');

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }
    console.log(data);
  });
}

// Get the file path from command-line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as a command-line argument.");
  process.exit(1);
}

// Call printFileContents with the command-line argument
printFileContents(filePath);
