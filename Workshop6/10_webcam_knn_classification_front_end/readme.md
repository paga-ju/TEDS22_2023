# Exercise 10: Image Classification Example (Part Three)

This exercise is based on the tutorial found on the TensorFlow website:  
https://www.tensorflow.org/js/tutorials/transfer/image_classification

You can follow the tutorial yourself using the link above.

In the tutorial, you will learn how to build a custom image classifier that you will train on the fly in the browser using TensorFlow.js. Also you will use transfer learning to create a highly accurate model with minimal training data. Furthermore, you will be using a pre-trained model for image classification called MobileNet, where you will train a model on top of this one to customize the image classes it recognizes.

If you just want to see the finished result, you can follow the steps below.

**Note**

The code below is for the third part of the tutorial on the TensorFlow website, i.e. it classifies video camera frames from your web camera using transfer learning on top of the pre-trained MobileNet model to train a KNN classifier.

## Run the Web Application

In the `10_webcam_knn_classification_front_end` folder, run:
> `http-server -c-1`

Then use the following URL in your web browser to access the web application:
> `http://localhost:8080` (or `http://localhost:8081`)

When you are done, in the terminal where you started the `http-server`, use `<ctrl> + <c>` to stop the `http-server`.
