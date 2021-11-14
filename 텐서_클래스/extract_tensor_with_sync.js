import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 2, 3, 4], [2, 2]);
tsOne.print(true);
const typedData = tsOne.dataSync();
console.log('typedData=', typedData);
const data = Array.from(typedData);
console.log('Array Converted TypedData=', data);