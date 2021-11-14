import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 2, -3, 4]);
tsOne.print(true);
// clipByValue : x의 i번째 값이 min 보다 작으면 x의 i번째 값을 최솟값 반환
//               x의 i번째 값이 max 보다 크면 x의 i번째 값을 최댓값 반환

/**
 * 결국 clipByValue 는 최솟값, 최댓값 범위를 지정해서 범위를 넘어가는 것은 다 지정한 최솟값 최댓값으로 반환하도록 하는 함수다.
 */
tsOne.clipByValue(-2, 3)
    .print(true);

tsOne.cumsum()
    .print(true);
const printedTensor = tsOne.toString(true);
console.log('tensor : ', printedTensor);