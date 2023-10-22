# Exercise 03: Simple Web Application

In this exercise you will learn:
- How to create a `package.json` file with information about a Node.js application.
- How to install JavaScript packages using the Node Package Manager `npm`.
- How to write own packages (for the application).
- How to create a simple web server using Node.js.
- How to write HTML, CSS and JavaScript files for a simple web application.
- The difference between CommonJS Modules and ES6 Modules.

## Creating a `package.json` File

Every Node.js application has a `package.json` file that contains information about the application, such as the name and version of the application, and JavaScript packages that the application relies on (dependencies).

To create a `package.json`, run the following command in the `03_simple_web_app` folder:
> `npm init -y`

The `-y` flag creates default settings for the application (if we omit the flag, we can choose settings interactively in the terminal).

## Installing a JavaScript Package

Just as we can `pip install` Python packages using the `pip` package manager, we can `npm install` JavaScript packages using the Node Package Manager `npm`.

Let's install a very simple package `upper-case` to see how this works. To install the package, execute the following command in the `03_simple_web_app` folder:
> `npm install upper-case --save`

The `--save` flag will write the package name and version to the `package.json` file. A `package-lock.json` is also created, which also contains information about installed application packages, but in a more compact format. Finally, a sub-folder `node_modules` is created, that contains the actual downloaded package. It will also contain any packages that the installed package depends on (in this case `upper-case` depends on a package called `tslib`).

Since the packages that the application depends on are stored in the `package.json` file, we can easily install these packages in a new folder or on another computer, by running the command `npm install` in the folder containing the `package.json` file. This will simply install all JavaScript packages registered in the `package.json` file.

If we want to uninstall a package, e.g. the `upper-case` package, we can use the command `npm un upper-case`. But don't do this, since we will use this package in our application. We can also list all installed packages for our application by runing the command `npm ls`.

Now that we have installed the `upper-case` package, we can use its functionality in our JavaScript files.

## CommonJS Modules vs ES6 Modules

Before ECMA version 6 (ES6) of JavaScript was introduced, JavaScript Modules (packages) were written with a syntax called *CommonJS Modules*. ECMA version 6 (ES6) introduced a new syntax called *ES6 Modules*.

Let's write our own module `myModule` to see the differences, starting with the CommonJS syntax. The file `myModule.js` contains the following code:

```javascript
getDateTime = function () {
    return Date();
};

module.exports = { getDateTime };
```

Here we are defining a module that *exports* a function *getDateTime()* that returns the current date. We can also export variables, constants, etc. By exporting functionality from a module, another JavaScript file can *import* and use that functionality. This is how we would do that in another JavaScript file:

```javascript
var dt = require('./myModule.js');
console.log(dt.getDateTime());
```

Here we are importing all the exported functionality from `myModule.js`, using the alias `dt`, into another JavaScript file. Then we are calling the `getDateTime()` function via the alias `dt.getDateTime()`, which will return the current date.

The syntax above for exporting and importing functionality, is called the CommonJS format. Also notice the file extension `.js` for the file `myModule.js`.

Now, let's see the same example using the ES6 format. Here's how we would export the same function from the file `myModule.mjs`:

```javascript
let getDateTime = function () {
    return Date();
};

export { getDateTime };
```

And here's how we would import and use the functionality in another JavaScript file.

```javascript
import * as dt from './myModule.mjs';
console.log(dt.getDateTime());
```
Also notice the file extension `.mjs` for the file `myModule.mjs`. This file extension is commoly used to indicate that a module `myModule` is a ES86 module (but not strictly necessary).

Also notice that we are importing the module using a file path (relative to the application directory in this case). That's because the module hasn't been installed as a package, as we e.g. did with the `upper-case` package. We would import the functionality from an installed package using the syntax below (i.e. just using the packge name):

CommonJS
```javascript
var uc = require('upper-case');
```

ES6
```javascript
import * as uc from 'upper-case';
```

## Front End Files

The files that will be uploaded to the web browser (client-side/front-end) are exactly the same files used as an example during the lecture about *JavaScript Basics*:
- `first-look-bright.css` contains CSS for a "bright" look-and-feel.
- `first-look-dark.css` contains CSS for a "dark" look-and-feel.
- `index.js` contains the JavaScript that changes between the "bright" and "dark" modes.
- `index.html` contains the HTML with `<link>` and `<script>` tags that reference the CSS and JavaScript files.
- `favicon.ico` is just an icon I have includued that will be displayed in the web page's title.

**Note**

The `<script>` tag in the `index.html` file looks like this:

```javascript
<script src="index.js"></script>
```

That's because the file `index.js` doesn't contain any code with the ES6 syntax. If the code in `index.js` did use ES6 syntax, we would use the following `<script>` tag in the `index.html` file:

```javascript
<script src="index.js" type="module"></script>
```

Notice the attribute `type` with the value `module`. This is needed for an ES6 style module (JavaScript file).

## Backend Files

In this case we only have one backend (server-side) file `server` (i.e. a file that doesn't get uploaded to the front-end/client-side/browser). This file contains code for a simple web server, that can upload (*serve*) the front-end files (HTML, CSS, JavaScript) to the client/web browser when requested. In this case, I have written two backend files to illustrate the differnece between CommonJS syntax and ES6 syntax (but we really only need one of these files):
- `server.js` uses CommonJS syntax.
- `server.mjs` uses ES6 syntax.

The code in these two file use the following packages/modules:
- `http` (part of Node.js) is used to create a web server.
- `url` (part of Node.js) is used to parse URLs.
- `fs` (part of Node.js) is used to read files from the file system.
- `upper-case` is the package we installed.
- `myModule` is the module we wrote ourselves.

The web server uses `http://localhost:8081`.

## Running the Web Server

We can start the web server with the following command (in the `03_simple_web_app` folder):

> `node server.js`

or

> `node server.mjs`

Then we can access the web application in our browser using the following URL: `http://localhost:8081`

To stop the web server, press `ctrl + c`

## Using the `http-server` development Web Server

If we just need a simple web server, we don't have to write one ourselves. Instead we can use the `http-server` development web server to host (*serve*) our front-end files.

We can install the `http-server` with the following command:
> `npm install http-server -g`

The `-g` flag installs the `http-server` package globally on our computer (so that it can be started from any folder).

To use the `http-server`, we just need to move to the desired web application folder (in this case `03_simple_web_app`) and run the command:

> `http-server -c-1`

Then the web application will be available (by default) via `http://localhost:8080` (another port might be chosen, e.g. 8081, if 8080 is unavailable). The `-c-1` flag ensures that the web browser wont cache any information (which is good while developing the web application).

To stop the web server, press `ctrl + c`

## Express, Angular and React

[Express](https://expressjs.com) is a popular web framework for Node.js, which can be installed with `npm install express --save`.

[Angular](https://angular.io) and [React](https://reactjs.org) are popular front-end (client-side) frameworks/libraries.

Tutorials using Express, Angular and React in Visual Studio Code can be found here:
- [Node.js and Express](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
- [Angular](https://code.visualstudio.com/docs/nodejs/angular-tutorial)
- [React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
