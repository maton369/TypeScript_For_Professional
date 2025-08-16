// 即座に成功（resolve）する Promise を作成
// 値として 100 が返される
const p = Promise.resolve(100);

// Promise が解決されたあとに呼び出される処理を then に記述
// result には resolve で渡された値（ここでは 100）が入る
p.then((result) => {
    console.log(`result is ${result}`);
});