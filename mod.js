const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

function obfuscateCode(inputFile, outputFile) {
    const code = fs.readFileSync(inputFile, 'utf8');

    // Ensure `stringArrayEncoding` is a valid array
    const stringArrayEncodingOptions = ['none', 'base64', 'rc4'];
    const selectedEncoding = stringArrayEncodingOptions[Math.floor(Math.random() * stringArrayEncodingOptions.length)];

    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        stringArray: true,
        stringArrayEncoding: [selectedEncoding], // Use an array with one or more valid options
        stringArrayThreshold: 0.75,
        debugProtection: true,
        debugProtectionInterval: 10,
        disableConsoleOutput: true,
    }).getObfuscatedCode();

    fs.writeFileSync(outputFile, obfuscatedCode);
}

// Obfuscate `main.js` to `dist/main.obfuscated.js`
obfuscateCode('main.js', 'main.obfuscated.js');
