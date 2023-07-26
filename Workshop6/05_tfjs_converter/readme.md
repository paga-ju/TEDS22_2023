# Exercise 05: TensorFlow JS Converter

In this exercise you will learn how to:
- Convert and save TensorFlow Core/Keras models to TFJS models.
- Load converted TFJS models.

## Setup

In the `05_tfjs_converter` folder, run:
> `npm init -y`

> `npm install @tensorflow/tfjs --save`

> `npm install @tensorflow/tfjs-node --save`

Or, run the command below to install the packages from the existing `package.json` file:
> `npm install`

In both cases, the latest release of the TensorFlow JS package will be installed in the application folder:
- `npm install @tensorflow/tfjs --save` installs TFJS that uses "pure" JavaScript.
- `npm install @tensorflow/tfjs-node --save` installs TFJS that uses C++ with JavaScript bindings.

Install the `tensorflowjs` converter Python package in your Python virtual environment:

> `pip install tensorflowjs`

Or, in your in your Python virtual environment, run:

> `pip install -r requirements.txt`

## Execute the Code

In the `05_tfjs_converter` folder, first run the command below:

> `python 01_convert_tf_model_to_tfjs_model.py`
 
This Python code creates, converts and saves a Keras model as a TFJS model.
- The Tensorflow Core model is stored in the folder `saved_tf_models`
- The TFJS model is stored in the folder `saved_tfjs_models`

Then, in the `05_tfjs_converter` folder, run either of the commands below:
- `node 02_load_converted_tfjs_model.js` (uses CommonJS syntax)
- `node 02_load_converted_tfjs_model.mjs` (uses ES6 syntax)

This JavaScript code loads the saved TFJS models, created by the Python code above.