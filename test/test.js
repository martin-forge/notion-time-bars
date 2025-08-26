const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

// Ensure the page title is present
assert.ok(
  html.includes('<title>Time Bars — Equal</title>'),
  'HTML title should be "Time Bars — Equal"'
);

// Ensure the progress bar elements exist
['bar-day', 'bar-week', 'bar-month', 'bar-year'].forEach(id => {
  assert.ok(html.includes(`id="${id}"`), `Missing element with id ${id}`);
});

console.log('All tests passed');
