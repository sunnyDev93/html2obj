// Import the necessary modules
const fs = require('fs').promises; // Use built-in promises for file operations
const parseHTML = require('html2obj-maciej.k')
// Create an async function to encapsulate the main logic
const main = async () => {
  try {
    // Get the filename from command line arguments
    const fileName = process.argv[2];

    // Check if a filename is provided
    if (!fileName) {
      // If not provided, throw an error
      throw new Error('Please provide an HTML file as an argument.');
    }

    // Read the content of the HTML file asynchronously
    const data = await fs.readFile(fileName, 'utf8');

    // Parse the HTML content into an object
    const htmlObject = parseHTML(data);

    // Print the parsed HTML object with proper formatting
    console.log(JSON.stringify(htmlObject, null, 2));
  } catch (error) {
    // Handle errors
    console.error(`Error: ${error.message}`);
    process.exitCode = 1; // Set exit code for error
  }
};

// Call the main function to start the program
main();