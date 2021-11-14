import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 3, 5, 7]);
tsOne
    .print(true);

const tsTwo = tf.tensor1d([1, 2, 3], 'int32');
tsTwo
    .print(true);

/**
 * tf.gather() 함수는 인덱스 번재 값을 추출합니다.
 * 파라미터 tensor에 추출 대상 tf.Tensor를 작성합니다.
 * 파라미터 indices에 추출 기준 인덱스를 int32 타입으로 작성합니다.
 */
tf.gather(tsOne, tsTwo)
    .print(true);


//2차원 배열에서 추출
//추출 대상이 2차원 배열이면 1차원 배열을 추출하고, 1차원 배열이면 엘리먼트를 추출합니다.
const tsThree = tf.tensor2d([1, 3, 5, 7, 9, 11], [3, 2]);
tsThree
    .print(true);

const tsFour = tf.tensor1d([0, 2, 1], 'int32');
tsFour
    .print(true);

tf.gather(tsThree, tsFour)
    .print(true);