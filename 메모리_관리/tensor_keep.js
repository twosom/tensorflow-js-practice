import tf from "@tensorflow/tfjs";

function main() {
    return tf.tidy(() => {
        const tsOne = tf.scalar(1);
        const tsTwo = tf.scalar(2);

        const tsKeep = tf.keep(tsOne.add(tsTwo));
        console.log(tf.memory());
        console.log('tidy() 안');
    });
}

main();
console.log(tf.memory());
console.log('tidy() 밖');