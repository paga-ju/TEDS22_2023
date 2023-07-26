import tensorflow as tf
import tensorflowjs as tfjs
import os

saved_tf_models_dir = os.path.join(os.getcwd(),'saved_tf_models')
os.makedirs(saved_tf_models_dir, exist_ok = True)

saved_tfjs_models_dir = os.path.join(os.getcwd(),'saved_tfjs_models')
os.makedirs(saved_tfjs_models_dir, exist_ok = True)

os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
if tf.test.gpu_device_name():
    print('GPU found')
else:
    print('No GPU found')

# Create a model using high-level tf.keras.* APIs
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(units=1, input_shape=[1], name='input_layer'),
    tf.keras.layers.Dense(units=16, activation='relu', name='hidden_layer'),
    tf.keras.layers.Dense(units=1, name='output_layer')
])

# Compile the model
model.compile(optimizer='sgd', loss='mean_squared_error')

# Print the model's architecture
model.summary()

# Train the model
model.fit(x=[-1, 0, 1], y=[-3, -1, 1], epochs=5)

# Predict on a new instance
result = model.predict([-1])
print(f'\nPredicted result: {result}\n')

# Save the model as a SavedModel
tf.saved_model.save(model, './saved_tf_models/my_model')

# Convert the TF model from the "SavedModel" folder to a TFJS model
# Note: a model converted and saved using the Python function "tfjs.converters.convert_tf_saved_model()"
# must be loaded using the JavaScript function "tf.loadGraphModel()".
tfjs.converters.convert_tf_saved_model('./saved_tf_models/my_model', './saved_tfjs_models/my_model_1')

# Convert the TF model from the "model" variable above to a TFJS model
# Note: a model converted and saved using the Python function "tfjs.converters.save_keras_model()"
# must be loaded using the JavaScript function "tf.loadLayersModel()".
tfjs.converters.save_keras_model(model, './saved_tfjs_models/my_model_2')