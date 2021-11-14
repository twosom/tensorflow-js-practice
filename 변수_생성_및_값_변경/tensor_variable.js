import tf from "@tensorflow/tfjs";

tf.variable(
    tf.scalar(Math.random()),
    true,
    'weight'
).print(true);

const initialValue = tf.randomNormal([1], 0, 1, 'float32', 702);
initialValue
    .print(true);
tf.variable(initialValue)
    .print(true);