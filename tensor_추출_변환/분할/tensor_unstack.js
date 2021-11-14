import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 3, 5, 7, 9, 11], [3, 2]);
tsOne
    .print(true);
tsOne
    .unstack()
    .forEach(tensor => {
        console.log('###UNSTACKED TENSOR : ');
        tensor
            .print(true);
    });