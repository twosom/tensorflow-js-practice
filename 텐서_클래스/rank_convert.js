import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor3d(
    [1, 2, 3, 4],
    [2, 2, 1]
);
tsOne.print(true);

tsOne.as2D(2, 2)
    .print(true);

const tsTwo = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
tsTwo.print(true);

tsTwo.as3D(2, 1, 4)
    .print(true);


const tsThree = tf.tensor3d([5, 6, 7, 8], [2, 2, 1]);
tsThree.print(true);
tsThree.as1D()
    .print(true);5