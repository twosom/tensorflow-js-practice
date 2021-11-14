import tf from '@tensorflow/tfjs';

/**
 * 파라미터 start에 시작 값 작성<br/>
 * 파라미터 stop에 끝값 작성<br/>
 * 파라미터 num에 생성할 항수 작성<br/>
 * stop 에서 start를 뺀 값을 num - 1값으로 나누어서 항과 항의 차이를 구한다.
 */
tf.linspace(0, 10, 5)
    .print(true);