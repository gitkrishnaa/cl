# cl-print

**cl-print** is an npm package that extends the default `console.log` functionality to include the filename and line number where the log was triggered. This makes debugging easier by showing exactly where in your code the log statement originated.

---

## Features

- Automatically displays the filename and line number for each console output.
- Works as a drop-in replacement for `console.log`.
- Makes debugging easier by providing context for logs.

---

## Installation

Install the package using npm:

```bash
npm install cl-print
```

---

## Usage

Simply require or import the package and use it like `console.log`.

### Example

```javascript
const clPrint = require('cl-print');

clPrint('Hello, World!'); 
// Output: [xyz.js:15] Hello, World!
```

---

### Sample Output

If you add the following code in a file named `example.js`:

```javascript
const clPrint = require('cl-print');

function test() {
  clPrint('This is a test log.');
}

test();
```

You’ll see the following output in the console:

```
[example.js:4] This is a test log.
```

---

## Why Use cl-print?

- **Debugging Made Easy**: Quickly find where logs are being triggered.
- **No Manual Effort**: No need to manually include filenames and line numbers in your logs.
- **Improves Productivity**: Spend less time searching through your code.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Developed by **Krishna Kumar**. Feel free to reach out with feedback or suggestions!