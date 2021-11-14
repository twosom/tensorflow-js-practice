import tf from "@tensorflow/tfjs";

tf.ones([2, 3], 'float32')
    .print(true);

const tsOrigin = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [4, 2]);
tsOrigin
    .print(true);

tf.onesLike(tsOrigin)
    .print(true);

