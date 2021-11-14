import tf from "@tensorflow/tfjs";

const tsOne = tf.scalar(1);

tsOne.print(true);

const tsTwo = tf.scalar(2);
tsTwo.print(true);
const tsThree = tf.tensor1d([1, 2]);
tsThree.print(true);
const tsAdd = tsTwo.add(tsOne);
tsAdd.print(true);
const tsSub = tsTwo.sub(tsOne);
tsSub.print(true);

const result = tf.memory();
console.log(result);


