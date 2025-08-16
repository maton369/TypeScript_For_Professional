// Promise.resolve(100) と同じ挙動をするコード例

// new Promise コンストラクタを利用して、明示的に resolve を呼び出す
// この場合も Promise は即座に成功状態（fulfilled）になり、値 100 を返す
new Promise<number>((resolve) => {
    resolve(100); // Promise.resolve(100) と同じ意味
})
    .then((value) => {
        console.log(`value is ${value}`); // => "value is 100"
    });