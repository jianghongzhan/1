const fs = require('fs');
const path = require('path');

const baseDir = 'D:\\openclaw\\.openclaw\\workspace\\shared\\artifacts\\cet4-website';

// Read files with UTF-8 encoding
let html = fs.readFileSync(path.join(baseDir, 'dist', 'index.html'), 'utf8');
console.log('Original HTML:', html);

// Find and read CSS file
const cssFiles = fs.readdirSync(path.join(baseDir, 'dist')).filter(f => f.endsWith('.css'));
if (cssFiles.length > 0) {
  const css = fs.readFileSync(path.join(baseDir, 'dist', cssFiles[0]), 'utf8');
  console.log('CSS file:', cssFiles[0], 'size:', css.length);
  // Replace link tag with style tag
  html = html.replace(/<link[^>]*rel=stylesheet[^>]*>/, '<style>' + css + '</style>');
}

// Find and read JS file
const jsFiles = fs.readdirSync(path.join(baseDir, 'dist')).filter(f => f.endsWith('.js'));
if (jsFiles.length > 0) {
  const js = fs.readFileSync(path.join(baseDir, 'dist', jsFiles[0]), 'utf8');
  console.log('JS file:', jsFiles[0], 'size:', js.length);
  // Replace script tag with inline script
  html = html.replace(/<script[^>]*type=module[^>]*src=[^>]+><\/script>/, '<script type="module">' + js + '</script>');
}

// Add proper head structure
html = html.replace(
  '<html lang=zh-CN>',
  '<html lang="zh-CN">'
);

// Ensure charset is first thing after <html>
if (!html.includes('<head>')) {
  html = html.replace('<html lang="zh-CN">', '<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>');
}

// Add closing tags
if (!html.includes('</body>')) {
  html = html + '</body>';
}
if (!html.includes('</html>')) {
  html = html + '</html>';
}

// Write with UTF-8 encoding (no BOM)
fs.writeFileSync(path.join(baseDir, 'bundle.html'), html, 'utf8');
console.log('\n✅ Bundle created! Size:', (html.length / 1024).toFixed(2), 'KB');
console.log('Output:', path.join(baseDir, 'bundle.html'));