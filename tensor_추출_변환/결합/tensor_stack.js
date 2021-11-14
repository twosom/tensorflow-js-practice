import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 2, 3, 4], [2, 2]);
tsOne
    .print(true);

const tsTwo = tf.tensor2d([5, 6, 7, 8], [2, 2]);
tsTwo
    .print(true);

/**
 * tf.stack() 함수는 파라미터에 작성된 순서로 tf.Tensor 값을 연결한다.
 * 파라미터의 tensors에 연결 대상을 작성하며, 다수를 작성할 수 있다.
 * 자바스크립트의 push와 같은 개념이다.
 * tensors에 작성한 순서대로 tf.Tensor 값을 push한다.
 * 배열에 push하므로 랭크가 하나 늘어나게 된다.
 */

//tf.stack([tsOne, tsTwo]) 함수의 두 번째 파라미터 axis 를 작성하지 않았으며, axis 값은 0이다.
//axis가 0이면 새로운 배열을 만들고, 첫 번째 파라미터에 작성한 순서대로 tf.Tensor 값을 push한다.
//tf.Tensor 값이 2차원이므로 연결 결과는 3차원이 된다.
tf.stack([tsOne, tsTwo])
    .print(true);

//axis 에 1을 작성한 경우
//두 번째 파ㅏㄹ미터 axis에 1을 작성했다.
//값이 2차원이고 axis가 1이므로 축의 엘리먼트를 연결한다.
tf.stack([tsOne, tsTwo], 1)
    .print(true);
