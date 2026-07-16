const DottedMap = require('dotted-map').default;

const map = new DottedMap({ height: 40, grid: 'diagonal' });
const svg = map.getSVG({
  radius: 0.28,
  color: '#7E8B77',
  shape: 'circle',
  backgroundColor: 'transparent'
});

const fs = require('fs');
fs.writeFileSync('public/dotted-map.svg', svg);
console.log("Map generated!");
