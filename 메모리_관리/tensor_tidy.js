import tf from "@tensorflow/tfjs";

function main() {
    return tf.tidy(() => {
        const tsOne = tf.scalar(1);
        const tsTwo = tf.scalar(2);

        const tsAdd = tsTwo.add(tsOne);
        const tsSub = tsTwo.sub(tsOne);

        console.log(tf.memory());
        console.log('tidy() 안입니다.');
        return tsAdd;

    });
}

main();
console.log(tf.memory());
console.log('tidy() 밖입니다.');
