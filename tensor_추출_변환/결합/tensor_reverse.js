import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 3, 5]);
tsOne
    .print(true);

tsOne.reverse()
    .print(true);


const tsTwo = tf.tensor2d([1, 3, 5, 7, 9, 11], [3, 2]);
tsTwo
    .print(true);

tsTwo.reverse()
    .print(true);