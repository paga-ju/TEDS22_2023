# Exercise 01: JavaScript Basics

In this exercise you will learn:
- Basic JavaScript syntax and constructs.
- How to install a JavaScript kernel for Jupyter Notebook.
- How to run JavaScript Code in a Jupyter Notebook.

## Download and Install Node.js

Let's start by downloading and installing [Node.js](https://nodejs.org) (or node for short) - a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev) - if we haven't already done this. We can download Node.js from [here](https://nodejs.org/en/download). This will also install the [Node Package Manager](https://www.tutorialsteacher.com/nodejs/what-is-node-package-manager) `npm`, used to install JavaScript packages (i.e. the equivalent of the `pip` package manager for Python).

## Install a JavaScript kernel for Jupyter Notebook

We can use the Node Package Manager `npm` to install a JavaScript kernel for Jupyter Notebook. This will enable us to run JavaScript in a Jupyter Notebook. At the moment Visual Studio Code doesn't have good support for Notebooks with programming languages other than Python, but Jupyter Notebook does support multiple programming languages (e.g. Python, JavaScript, C, C++, C#, Java, etc), as long as a kernel has been installed for that specific programming language.

Run the following command in a terminal to install a JavaScript kernel (globally) for Jupyter Notebook:
> `npm install ijavascript -g`

Finally, choose to open the file `javascript_basics.ipynb` in the Jupyter Notebook web interface, and execute the cells in the Notebook.

## NOTE! If the Jupyter Notebook doesn't work

From the folder `teds20` activate the Python environment with the following command:
> `.venv\Scripts\activate` (Windows)  
> `source .venv\bin\activate` (Linux and MacOS)

Then, from the folder `01_javascript_basic` start Jupyter Notebook with the following command:
> `jupyter notebook --NotebookApp.token=''`

Finally, choose to open the file `javascript_basics.ipynb` in the Jupyter Notebook web interface, and execute the cells in the Notebook.

When you are done using Jupyter Notebook, press `<ctrl> + <c>` in the terminal (from which you started Jupyter Notebook).