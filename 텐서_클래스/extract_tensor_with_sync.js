import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 2, 3, 4], [2, 2]);
tsOne.print(true);
const typedData = tsOne.dataSync();
console.warn(typedData);