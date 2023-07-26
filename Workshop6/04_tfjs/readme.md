# Exercise 04: TensorFlow JS

In this exercise you will learn how to use TensorFlow JS (TFJS) to:
- Create a model.
- Train a model.
- Use a model in inference mode (predict).
- Save a model.
- Load a model.

## Installing the TensorFlow JS Packages

In the `04_tfjs` folder, run:
> `npm init -y`

> `npm install @tensorflow/tfjs --save`

> `npm install @tensorflow/tfjs-node --save`

Or, run the command below to install the packages from the existing `package.json` file:
> `npm install`

In both cases, the latest release of the TensorFlow JS package will be installed in the application folder:
- `npm install @tensorflow/tfjs --save` installs TFJS that uses "pure" JavaScript.
- `npm install @tensorflow/tfjs-node --save` installs TFJS that uses C++ with JavaScript bindings.

TFJS that uses C++ with JavaScript bindings is for using a quicker version of TFJS with Node.js (compare it to numpy in Python that executes C++ code with Python bindings to obtain a quicker execution speed).

If you have set up your computer properly to use *CUDA* and *cuDNN*, you can install and use the following package instead (uses your GPU for training and inference):

> ``npm install @tensorflow/tfjs-node-gpu --save``

## Execute the Code

In the `04_tfjs` folder, run either of the commands below:
- `node index.js` (uses CommonJS Modules)
- `node index.mjs` (uses ES6 Modules)

The code will train and save a TFJS model (to the folder `savedModels`), then load and run it in inference mode.
