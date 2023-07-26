// Load the required packages
//const tf = require('@tensorflow/tfjs');          // Use this for running tfjs in the browser (client-side)
const tf = require('@tensorflow/tfjs-node');       // Use this for running tfjs in Node.js (server-side) on the CPU
//const tf = require('@tensorflow/tfjs-node-gpu'); // Use this for running tfjs in Node.js (server-side) on the GPU
const fs = require('fs');

async function run() {
  
  // Create a simple model
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
  model.add(tf.layers.dense({units: 1, activation: 'linear'}));

  // Compile the model
  model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

  // Print model architecture
  model.summary();

  // Define some random training data
  const xs = tf.randomNormal([100, 10]);
  const ys = tf.randomNormal([100, 1]); // labels

  // Train the model
  // Note: the fit() function is asynchronous (returns a "Promise"),
  // so must be "awaited" inside a "async" function (or the "then" syntax can be used).
  await model.fit(xs, ys, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
    }
  });

  // Use the model to predict a new instance
  //var x = tf.tensor2d([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], [1, 10]);
  var x = tf.randomNormal([1,10]);
  var prediction = model.predict(x);

  // Print the predicted Tensor
  prediction.print();

  // Extract and print the predicted value
  var value = prediction.dataSync()[0];
  console.log('\nPredicted value: ' + value);

  // Create the "savedModels" folder to save the model in
  const dir = './savedModels';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    });
  }

  // Save the model (note: we save the model to a directory)
  try {
    await model.save('file://./savedModels/myModel');
  }
  catch (error) {
    console.log(error);
  }

  // Load the saved model (note: the model.json file must be included in the path)
  const loadedModel = await tf.loadLayersModel('file://./savedModels/myModel/model.json');

  // Predict a new value
  console.log('\nPredicted value after saving and loading the model:');
  loadedModel.predict(tf.randomNormal([1,10])).print();
}

// Call the (async) run function above
run();