// Load the required packages
//import * as tf from '@tensorflow/tfjs';          // Use this for running tfjs in the browser (client-side)
import * as tf from '@tensorflow/tfjs-node';       // Use this for running tfjs in Node.js (server-side) on the CPU
//import * as tf from '@tensorflow/tfjs-node-gpu'; // Use this for running tfjs in Node.js (server-side) on the GPU

async function run() {
  // Load the first converted and saved model (note: the model.json file must be included in the path)
  // Note: this model was converted and saved using the Python function "tfjs.converters.convert_tf_saved_model()"
  // and must be loaded using the JavaScript function "tf.loadGraphModel()".
  var loadedModel = await tf.loadGraphModel('file://./saved_tfjs_models/my_model_1/model.json');

  // Predict a new value
  console.log('\nPredicted value after loading the first converted model:');
  loadedModel.predict(tf.tensor2d([-1],[1,1])).print();

  // Load the second converted and saved model (note: the model.json file must be included in the path)
  // Note: this model was converted and saved using the Python function "tfjs.converters.save_keras_model()"
  // and must be loaded using the JavaScript function "tf.loadLayersModel()".
  loadedModel = await tf.loadLayersModel('file://./saved_tfjs_models/my_model_2/model.json');

  // Predict a new value
  console.log('\nPredicted value after loading the second converted model:');
    loadedModel.predict(tf.tensor2d([-1],[1,1])).print();
}

// Call the (async) run function above
run();