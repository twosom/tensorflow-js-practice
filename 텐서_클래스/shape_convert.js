import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 3, 5, 7], [4, 1]);
tsOne
    .print(true);


const tsTwo = tf.tensor2d([2, 4, 6, 8], [2, 2]);
tsTwo
    .print(true);


/**
 * reshapeAs() 함수를 호출한 tf.Tensor의 값을, 파라미터 tensor에 작성한 tf.Tensor의 shape에 맞추어 변환합니다.
 * tf.Tensor.reshapeAs(tensor) 형태로 호출합니다.
 * *****엘리먼트 수가 같지 않으면 에러가 발생합니다.
 */
tsTwo.reshapeAs(tsOne)
    .print(true);