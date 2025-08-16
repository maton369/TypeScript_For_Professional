const p = Promise.resolve();

p.then(() => {
    console.log("2"); // マイクロタスクで実行される
});
console.log("1");   // こちらは同期的にすぐ実行される