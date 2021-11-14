import tf from "@tensorflow/tfjs";

const optimizer = tf.train.sgd(0.1);
const tsScalar3 = tf.scalar(3);
const varOne = tf.variable(
    tf.scalar(Math.random()),
    true,
    'weight'
);

for (let k = 0; k < 1_000_000; k++) {
    optimizer.minimize(() => {
        const pred = varOne.mul(tsScalar3);
        pred.print(true);
        return pred;
    });
}
