import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 3, 5, 7], [2, 2]);
tsOne.print(true);
const tsTwo = tsOne.square();
tsTwo.print(true);
console.log(tf.memory());

tf.dispose([tsOne, tsTwo]);
console.log(tf.memory());