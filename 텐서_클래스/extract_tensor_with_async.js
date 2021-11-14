import tf from "@tensorflow/tfjs";

async function getData() {
    const tsOne = tf.tensor2d([1, 3], [2, 1]);
    return await tsOne.data();
}

await getData()
    .then(data => {
        console.log('###Async Data Convert Finished!');
        if (data instanceof Float32Array) {
            console.log(Array.from(data));
        }
    })
    .catch(error => {
        console.error(error);
    })

