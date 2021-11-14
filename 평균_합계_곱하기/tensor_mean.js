import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([1, 3, 5]);
tsOne
    .print(true);

tsOne
    .mean()
    .print(true);

//3차원 배열이면서 axis가 0인 경우
const tsTwo = tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]);
tsTwo
    .print(true);

/**
 * axis가 0이면 열로 평균을 구한다.
 */
tsTwo
    .mean(0)
    .print(true);

//3차원 배열이면서 axis가 1인 경우
/**
 * axis가 1이면 각 행의 열로 평균을 구한다.
 */
tsTwo
    .mean(1)
    .print(true);


//3차원 배열이면서 axis가 2인 경우
/**
 * axis가 2이면 1차원 배열의 평균을 구한다.
 */
tsTwo
    .mean(2)
    .print(true);

tsTwo
    .mean(1)
    .print(true);

const _ =
    [
        [
            [1, 2], [3, 4]
        ],
        [
            [5, 6], [7, 8]
        ]
    ];