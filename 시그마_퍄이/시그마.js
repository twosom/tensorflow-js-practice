import tf from "@tensorflow/tfjs";

//등차수열 2, 4, 6, 8의 첫째항부터 4번째항까지의 합을 구한다.
tf.range(0, 10, 2)
    .sum()
    .print(true);