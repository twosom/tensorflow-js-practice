import tf from "@tensorflow/tfjs";

const tsValue = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
tsValue.print(true);
tsValue.split(2)
    .forEach(tensor => {
        tensor.print(true);
    });


tsValue.split(2, 1)
    .forEach(tensor => {
        tensor.print(true);
    });