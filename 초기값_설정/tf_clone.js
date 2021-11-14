import tf from "@tensorflow/tfjs";

const tsOrigin = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [8, 1]);
tsOrigin.print(true);

tf.clone(tsOrigin)
    .print(true);