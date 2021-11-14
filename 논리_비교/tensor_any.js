import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, -3, 0, 0], [2, 2], 'bool');
tsOne
    .print(true);

tsOne
    .any(1, true)
    .print(true);

const tsTwo = tf.tensor2d([2, 4, 0, 0, 1, -4], [3, 2], 'bool');
tsTwo
    .print(true);

tsTwo
    .any(1, true)
    .print(true);