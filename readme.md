

# 🌟 cl-print - Log with Filename & Line Number 

**`cl-print`** is a lightweight and powerful npm package that enhances your console logging by automatically adding **filename** and **line number** to each log statement. With this package, debugging becomes a breeze as you can immediately see where your logs are coming from.

---

## 🚀 Features

- ✨ Automatically prepends the **filename** and **line number** to every `console.log` statement.
- 🎯 **No manual effort** required to track logs.
- 🛠️ Works out of the box, just replace `console.log` with `clPrint`.
- 🧑‍💻 Helps in debugging by providing clear and concise context.

---

## 📦 Installation

You can easily install `cl-print` via npm:

```bash
npm install cl-print
```

---

## 🖥️ Usage

Once installed, just require or import the package and use it like you would use `console.log`.

### Example

```javascript
const cl = require('cl-print');

cl('Hello, World!'); 
// Output: [xyz.js:15] Hello, World!
```

In this example, the log message will display the filename (`xyz.js`) and the line number (`15`), showing exactly where the log was made.

---

## 💡 Sample Output

Suppose you have a file `app.js` with the following code:

```javascript
const cl = require('cl-print');

function greet() {
  cl('Hello, this is a test log!');
}

greet();
```

The output in your console will look like:

```
[app.js:4] Hello, this is a test log!
```

As you can see, it includes the filename (`app.js`) and the line number (`4`), making it incredibly easy to track the source of your log.

---

## 🔥 Why Choose cl-print?

- **Instant Context**: Get a clear picture of where your logs are being triggered without any extra effort.
- **Simplified Debugging**: No more guessing or searching for log statements — it's all right there.
- **Zero Configuration**: Just install and use it like `console.log`, and you're good to go.
- **Perfect for Teams**: Everyone on the team can easily identify log origins, which improves collaboration and productivity.

---

## 🎉 Quick Start

```javascript
const clPrint = require('cl-print');

// Using it like console.log, but with filename and line number
cl('This is a log with context!');
```

Output:

```
[app.js:10] This is a log with context!
```

---

## 🤝 Contributing

We welcome contributions! If you find bugs, or want to add features, feel free to fork the repository and submit a pull request. Here's how you can contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 👨‍💻 Author

Developed and maintained by **Krishna Kumar**. Feel free to reach out for questions, suggestions, or collaborations! 😄

🔑 Keywords
console.log
debugging
log
developer-tools
debug
filename
line-number
nodejs
logging
log-with-context
nodejs-logging
console-enhancer
cl-print

<!-- 🔗 [Visit the GitHub Repo](https://github.com/your-username/cl-print) -->

