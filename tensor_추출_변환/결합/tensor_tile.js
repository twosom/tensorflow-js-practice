import tf from "@tensorflow/tfjs";

let tsOne = tf.tensor1d([1, 3]);
tsOne
    .print(true);

/**
 * tf.tile() 함수는 tf.Tensor 값을 복제하고 연결한다.
 * 파라미터 tensors에 복제 대상을 작성하며, 다수를 작성할 수 있다.
 * 파라미터 reps에 복제할 수를 작성한다.
 * 값이 하나라도 배열로 작성한다. reps의 값이 하나이면 값만큼 첫 번째 파라미터의 tf.Tensor 값을 복제하고 연결한다.
 * reps에 [2, 3]을 작성하면 행을 두 번 복제하고 열을 세 번 복제한다.
 */
tf.tile(tsOne, [3])
    .print(true);


let tsTwo = tf.tensor2d([1, 3, 5, 7], [2, 2]);
tsTwo
    .print(true);
tsTwo.tile([2, 3])
    .print(true);