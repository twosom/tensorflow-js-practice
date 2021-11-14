import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 2, 3, 4, 5, 6]);
tsOne
    .print(true);
tsOne
    .reshape([3, 2])
    .print(true);