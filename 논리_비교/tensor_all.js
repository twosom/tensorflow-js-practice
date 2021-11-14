import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, -3, 0, 0], [2, 2], 'bool');
tsOne
    .print(true);

tsOne
    .all()
    .print(true);