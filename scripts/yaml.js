const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const chokidar = require('chokidar');

const srcFolder = path.join(__dirname, '..', 'src');
const yamlDir = path.join(srcFolder, 'config');

const yamlToJSON = () => {
  const yamlFiles = fs.readdirSync(yamlDir);
  const JSON_DATA = {
    PT_SITE: {
    },
  };
  yamlFiles.forEach(file => {
    const fileName = file.replace('.yaml', '');
    const source = fs.readFileSync(yamlDir + '/' + file, 'UTF-8');
    JSON_DATA.PT_SITE[fileName] = YAML.parse(source);
  });
  fs.writeFileSync(`${srcFolder}/config.json`, JSON.stringify(JSON_DATA, null, 2));
};
yamlToJSON();
chokidar.watch('src/config/*', { awaitWriteFinish: true, ignoreInitial: true }).on('all', (eventName, path) => {
  yamlToJSON();
});
