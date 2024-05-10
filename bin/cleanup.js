const fs = require('fs');
const path = require('path');

const rootDirectory = './dist'; // Change to your root directory path
const tempStyles = path.join(rootDirectory, 'styles.css'); // Path to temp styles to delete

// Recursive function to find and delete files and directories starting with an underscore
function deleteUnderscorePrefixed(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      deleteUnderscorePrefixed(entryPath);  // Recurse into subdirectories
      if (entry.name.startsWith('_')) {
        fs.rm(entryPath, { recursive: true }, err => {
          if (err) {
            console.error(`Error deleting directory ${entryPath}: ${err}`);
          } else {
            console.log(`Deleted directory ${entryPath}`);
          }
        });
      }
    } else if (entry.name.startsWith('_')) {
      fs.unlinkSync(entryPath);  // Delete the file
      console.log(`Deleted file ${entryPath}`);
    }
  });
}

// Clean up all files and directories starting with an underscore
deleteUnderscorePrefixed(rootDirectory);

// Check and delete the specific file if it exists
if (fs.existsSync(tempStyles)) {
  fs.unlinkSync(tempStyles);
  console.log(`Deleted ${tempStyles}`);
}
