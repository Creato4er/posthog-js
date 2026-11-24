import kleur from 'kleur';

console.log(kleur.green('Dependency fixture is running.'));
console.log('Installed package:', kleur.cyan('kleur@4.1.5'));
console.log('Runtime-fetched package: run `node runtime-fetch.mjs`');
console.log('Bundled executable: run `./bin/bundled-tool --version`');
