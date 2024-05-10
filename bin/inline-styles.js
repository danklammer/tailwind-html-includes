const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDirectory = './dist'; // Change to your root directory path

// Recursive function to find HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = findHtmlFiles(filePath, fileList);  // Recurse into subdirectories
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Get all HTML files
const htmlFiles = findHtmlFiles(rootDirectory);

htmlFiles.forEach(filePath => {
  const outputCSSPath = filePath.replace('.html', '_.css');  // Prefixing the CSS file with an underscore

  // Generate the CSS
  execSync(`npx tailwindcss -i ./src/_includes/css/tailwind.css -o "${outputCSSPath}" --content "${filePath}" --minify`);

  // Read the generated CSS
  const css = fs.readFileSync(outputCSSPath, 'utf8');

  // Read the HTML file
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  // Insert CSS into the HTML
  const updatedHtml = htmlContent.replace(`<link rel="stylesheet" href="/styles.css">`, `<style>${css}</style></head>`);

  // Save the updated HTML
  fs.writeFileSync(filePath, updatedHtml);

  // Delete the standalone CSS file since it's now inline
  fs.unlinkSync(outputCSSPath);
});

