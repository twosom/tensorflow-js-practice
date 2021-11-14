import tf from "@tensorflow/tfjs";

tf.truncatedNormal(
    [2, 2],
    0,
    1,
    'float32',
    700
).print(true);