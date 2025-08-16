// Promise.reject("foo") と同じ挙動をするコード例

// new Promise コンストラクタを利用して明示的に reject を呼び出す
// この場合も Promise は即座に失敗状態（rejected）になり、理由 "foo" が渡される
new Promise<never>((resolve, reject) => {
    reject("foo"); // Promise.reject("foo") と同じ意味
})
    .catch((error) => {
        console.log(`error is ${error}`); // => "error is foo"
    });