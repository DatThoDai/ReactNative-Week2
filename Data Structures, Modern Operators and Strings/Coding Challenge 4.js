document.getElementById('convertButton').addEventListener('click', function() {
    const text = document.getElementById('inputArea').value;
    const lines = text.split('\n');
  
    for (const [index, line] of lines.entries()) {
      const trimmedLine = line.trim().toLowerCase();
      const [first, second] = trimmedLine.split('_');
  
      const camelCaseWord = first + (second ? second[0].toUpperCase() + second.slice(1) : '');
  
      console.log(`${camelCaseWord.padEnd(20)}${'✅'.repeat(index + 1)}`);
    }
  });
  