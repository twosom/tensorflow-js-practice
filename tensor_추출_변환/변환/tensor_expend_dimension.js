import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 2, 3]);
tsOne
    .print(true);

/**
 * tf.expandDims() 함수는 tf.Tensor의 랭크를 확장한다.
 * 파라미터 tensor에 확장 대상을 작성한다.
 * tf.expandDims() 함수는 두 번째 파라미터 axis 값에 따라 랭크를 확장한다.
 * 아래에는 axis를 작성하지 않았으므로 axis 값은 0이다.
 * axis가 0이면 랭크를 1차원 확장한다.
 * 1차원 배열 [1, 2, 3]이 2차원 배열 [[1, 2, 3]]으로 확장된다.
 */
tsOne.expandDims()
    .print(true);

//1차원 배열이면서 axis에 1을 작성한 경우
tsOne.expandDims(1)
    .print(true);

//2차원 배열이면서 axis에 1을 작성한 경우
const tsTwo = tf.tensor2d([1, 2, 3, 4], [2, 2]);
tsTwo.expandDims(1)
    .print(true);