import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 2, 3]);
tsOne
    .print(true);

tsOne.pad([[1, 2]], 7)
    .print(true);