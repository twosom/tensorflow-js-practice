import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor3d([1, 2], [1, 1, 2]);
tsOne
    .print(true);

tsOne
    .squeeze()
    .print(true);