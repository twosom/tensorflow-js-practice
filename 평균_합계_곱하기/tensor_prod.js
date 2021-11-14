import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor1d([2, 3, 4]);
tsOne
    .print(true);

tsOne
    .prod()
    .print(true);

//axis가 0인 강우
const tsTwo = tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]);
tsTwo
    .print(true);

tsTwo
    .prod(0)
    .print(true);


//axis가 1인 경우
tsTwo
    .prod(1)
    .print(true);

const _ =
    [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ];

