import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 5, 3, 2, 4, 6], [2, 3]);
tsOne
    .print(true);

tsOne
    .max(0)
    .print(true);