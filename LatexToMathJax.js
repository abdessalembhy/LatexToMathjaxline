var fs = require('fs');
fs.readFile('./cours.tex', 'utf8', function(err, contents) {

var regex = /\$/gi, result, indices = [];

while ( (result = regex.exec(contents)) ) {
   indices.push(result.index);
}

for (var i=0; i<=indices.length ;i++) {
    if (i % 2 == 0) {
    contents = contents.replace(/\$/, '[mathjaxinline]');
    }
    else {
    contents = contents.replace(/\$/, '[/mathjaxinline]');
    }
   };
   contents = contents.replace(/\\vskip\s2mm/g, ' ');
   contents = contents.replace(/\\vect/g, '\\vec');
   contents = contents.replace(/\\cc/g, '\\checkmark');
   contents = contents.replace(/\\textbullet/g, '\\bullet');
   contents = contents.replace(/\\ds/g, '\\displaystyle');
   contents = contents.replace(/\\cRM\{1\}/g, 'I');
   contents = contents.replace(/\\cRM\{2\}/g, 'II');
   contents = contents.replace(/\\cRM\{3\}/g, 'III');
   console.log(indices)
   console.log(contents);

fs.writeFile('coursMathJaxLine.txt', contents, (err) => { 
    if (err) throw err; 
}) 
});
  

