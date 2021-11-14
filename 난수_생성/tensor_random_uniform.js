import tf from "@tensorflow/tfjs";

tf.randomUniform([2, 3], -1, 1)
    .print(true);

tf.randomUniform([3], 2, 6, 'int32')
    .print(true);

tf.randomUniform([2, 2], -1, 1)
    .print(true);