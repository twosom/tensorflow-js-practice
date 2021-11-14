import tf from "@tensorflow/tfjs";

// flatten 함수
console.warn('flatten 함수');
const tsOne = tf.tensor2d([1, 2, 3, 4], [2, 2]);
tsOne.print(true);
tsOne.flatten()
    .print(true);


// asScalar 함수, 벡터를 스칼라로 변환한다. 변환 대상 값이 벡터가 아니거나 벡터에 엘리먼트가 두 개 이상이면 에러가 발생한다.
console.warn('asScalar 함수');
const tsTwo = tf.tensor1d([123]);
tsTwo.print(true);
tsTwo.asScalar()
    .print(true);

console.error('asScalar 함수를 벡터가 아니거나 벡터에 엘리먼트가 두 개 이상 발생할 경우');
const tsThree = tf.tensor1d([1, 2, 3, 4]);
tsThree.print(true);
try {
    tsThree.asScalar()
        .print(true);
} catch (error) {
    console.error(error.message);
}