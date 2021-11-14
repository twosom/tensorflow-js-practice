import tf from "@tensorflow/tfjs";

const tsOne = tf.tensor2d([1, 2, 10, 20], [2, 2]);
tsOne
    .print(true);

const tsTwo = tf.tensor2d([3, 4, 30, 40], [2, 2]);
tsTwo
    .print(true);

/**
 * tf.concat() 함수는 tf.Tensor 값을 연결한다.
 * 파라미터 tensors에 연결 대상을 작성하며, 다수를 작성할 수 있다.
 * 랭크와 값 타입이 "같아야 한다". 파라미터 axis에 축을 작성하며 디폴트 값은 0이다.
 * axis 기준으로 tensors 값을 연결한다.
 * 이 함수는 axis 개념 이해가 중요하다.
 */
tf.concat([tsOne, tsTwo])
    .print(true);

//2차원 배열이면서 axis에 1을 작성한 경우
/**
 * axis를 작성하지 않은 앞에서는 1차원 배열을 연결했지만, axis에 1을 작성한 여기서는 엘리먼트를 연결했다.
 * 이처럼 axis 값에 따라 연결이 달라지지만, 연결 기준이 있다.
 * 랭크에서 axis 값을 뺀 값이 연결 기준이다.
 * 예를 들어, 랭크가 2이면서 axis가 1이면 1이 되며, 엘리먼트를 연결한다.
 * 또한 axis가 0이면 2가 되며, 1차원 배열을 연결한다.
 * 즉, 뺀 값이 연결 후의 차원이다.
 */
tf.concat([tsOne, tsTwo], 1)
    .print(true);


//3차원 배열이면서 axis에 2를 작성한 경우
const tsThree = tf.tensor3d([1, 3, 5, 7, 11, 13, 15, 17], [2, 2, 2]);
tsThree.print(true);

const tsFour = tf.tensor3d([2, 4, 6, 8, 12, 14, 16, 18], [2, 2, 2]);
tsFour.print(true);

tf.concat([tsThree, tsFour])
    .print(true);

tf.concat([tsThree, tsFour], 1)
    .print(true);


tf.concat([tsThree, tsFour], 2)
    .print(true);