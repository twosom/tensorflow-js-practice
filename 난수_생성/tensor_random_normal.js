import tf from "@tensorflow/tfjs";

tf.randomNormal(
    [3],
    0,
    1,
    'float32',
    700
).print(true);


tf.randomNormal(
    [2, 2],
    0,
    1,
    'float32',
    700
).print(true);