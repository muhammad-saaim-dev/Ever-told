const fs = require('fs');

const files = [
  'src/app/view-demo/page.jsx',
  'src/app/pricing/page.jsx',
  'src/app/contact/page.jsx',
  'src/app/legacy-gallery/page.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('ScrollReveal')) return;

  const importIndex = content.indexOf('import ');
  if (importIndex !== -1) {
    content = content.slice(0, importIndex) + 'import ScrollReveal from "@/components/ScrollReveal";\n' + content.slice(importIndex);
  } else {
    content = 'import ScrollReveal from "@/components/ScrollReveal";\n' + content;
  }

  content = content.replace(/<section/g, '<ScrollReveal>\n      <section');
  content = content.replace(/<\/section>/g, '</section>\n      </ScrollReveal>');

  fs.writeFileSync(file, content);
  console.log(`Processed ${file}`);
});
