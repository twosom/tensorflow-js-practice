import tf from "@tensorflow/tfjs";

const varOne = tf.variable(tf.tensor1d([1, 2, 3]));
varOne.print(true);
varOne.assign(tf.tensor1d([4, 5, 6]));
varOne.print(true);