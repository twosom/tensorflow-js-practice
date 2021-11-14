import tf from "@tensorflow/tfjs";

// 0부더 7까지 차이는 2
// 0, 2, 4, 6
tf.range(0, 8, 2)
    .print(true);

//step을 작성하지 않았을 때
tf.range(0, 8)
    .print(true);

//step에 음수를 작성했을 때
tf.range(7, 0, -2)
    .print(true);