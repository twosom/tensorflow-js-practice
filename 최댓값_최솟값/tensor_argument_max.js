import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 3, 5]);
tsOne
    .print(true);

tsOne
    .argMax()
    .print(true);

const tsTwo = tf.tensor2d([1, 3, 5, 7, 2, 4], [2, 3]);
tsTwo
    .print(true);

tsTwo
    .argMax(1)
    .print(true);