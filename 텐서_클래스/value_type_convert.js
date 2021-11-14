import tf from "@tensorflow/tfjs";

const tsOrigin = tf.tensor1d([1.0, 2.1, 3.1]);
tsOrigin
    .print(true);


tsOrigin.asType('int32')
    .print(true);