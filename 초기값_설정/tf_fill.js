import tf from "@tensorflow/tfjs";

// tf.fill() 함수는 파라미터 shape를 가진 tf.Tensor를 생성한다.
// 생성한 tf.Tensor의 모든 엘리먼트에 파라미터 value를 설정한다.
tf.fill([2, 2],
    12_800,
    'float32')
    .print(true);