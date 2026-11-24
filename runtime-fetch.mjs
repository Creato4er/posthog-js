// Demonstrates a dependency fetched directly by the application at runtime.
// Uses Node's built-in fetch and imports the pinned ESM entry point from esm.sh.
const response = await fetch('https://esm.sh/left-pad@1.3.0?bundle');
if (!response.ok) throw new Error(`Runtime dependency download failed: ${response.status}`);

const source = await response.text();
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const { default: leftPad } = await import(moduleUrl);
console.log(`Runtime-fetched left-pad@1.3.0: ${leftPad('7', 3, '0')}`);
