import tf from "@tensorflow/tfjs";

// tf.zeros() 함수는 tf.Tensor의 모든 엘리먼트에 0을 설정한다.
tf.zeros([2, 3], 'float32')
    .print(true);

const tsOrigin = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
tsOrigin.print(true);
tf.zerosLike(tsOrigin)
    .print(true);
