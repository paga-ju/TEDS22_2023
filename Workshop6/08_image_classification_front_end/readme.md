# Exercise 08: Image Classification Example (Part One)

This exercise is based on the tutorial found on the TensorFlow website:  
https://www.tensorflow.org/js/tutorials/transfer/image_classification

You can follow the tutorial yourself using the link above.

In the tutorial, you will learn how to build a custom image classifier that you will train on the fly in the browser using TensorFlow.js. Also you will use transfer learning to create a highly accurate model with minimal training data. Furthermore, you will be using a pre-trained model for image classification called MobileNet, where you will train a model on top of this one to customize the image classes it recognizes.

If you just want to see the finished result, you can follow the steps below.

**Note**

The code below is for the first part of the tutorial on the TensorFlow website, i.e. it classifies images using the pre-trained MobileNet model (i.e. it does not train a model, it doesn't use transfer learning, and it doesn't use your web camera).

## Run the Web Application

In the `08_image_classification_front_end` folder, run:
> `http-server -c-1`

Then use the following URL in your web browser to access the web application:
> `http://localhost:8080` (or `http://localhost:8081`)

The web application writes the predicted class to the console.

To see the result, first activate the developer tools in the Chrome Browser:
- `Control + Shift + C` (Windows and Linux)
- `Command + Shift + C` (MacOS)

Then choose the `Console` tab, and expand the `Array`.

When you are done, in the terminal where you started the `http-server`, use `<ctrl> + <c>` to stop the `http-server`.
