import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1.5, 2.5, 3]);
tsOne
    .print(true);
tsOne
    .cast('int32')
    .print(true);

tsOne
    .asType('int32')
    .print(true);