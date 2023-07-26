# Exercise 02: Node.js

In this exercise you will learn:
- How to execute JavaScript code with [Node.js](https://nodejs.org) (or node for short) - a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev).

## Download and Install Node.js

Let's start by downloading and installing Node.js from [here](https://nodejs.org/en/download), if we haven't already done this. This will also install the [Node Package Manager](https://www.tutorialsteacher.com/nodejs/what-is-node-package-manager) `npm`, used to install JavaScript packages (i.e. the equivalent of the `pip` package manager for Python).

## Execute a JavaScript File

The folder `02_node_js` contains a JavaScript file with some simple code.

```javascript
var a = 1;
var b = 2;

function add(x,y) {
    return x + y;
}

var result = add(a,b);

console.log(`${a} + ${b} = ${result}`);
```

 We can run and debug a JavaScript file in Visual Studio Code (by pressing F5 and choosing *Node.js*), but let's just execute the code using Node.js from the terminal.
- In the folder `02_node_js`, run the command:
> `node myJavaScriptFile.js`

Just as we have used `python python_file.py` to execute Python code in a Python file, using the Python interpreter, we can execute JavaScript code in a JavaScript file, using the `node.js` environment.

## More Node.js Tutorials

To learn more about Node.js see [the tutorials on w3schools](https://www.w3schools.com/nodejs) (which also has good tutorials on e.g. HTML, CSS and JavaScript).

## Note

The file `.jshintrc` in hte folder `02_node_js` is just a configuration file for the JavaScript *linter* i Visual Studio Code. A *linter* is used to *staticly* check the JavaScript code and provide helpful suggestions to improve the code (and doesn't affect the JavaScript program in any way). The `.jshintrc` file contains a setting that chooses which ECMA JavaScript (ES) version to use to check the JavaScript code (in this case we are using ES8).