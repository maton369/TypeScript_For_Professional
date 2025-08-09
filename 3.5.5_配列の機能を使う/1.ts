// ✅ number[] 型
// 1, 10, 100 の数値要素を持つ配列
const arr = [1, 10, 100];

// ✅ OK: push に数値を渡す
// arr は number[] 型なので、push には number 型の値のみ渡せる
arr.push(1000);
console.log(arr); // [1, 10, 100, 1000] と表示される

// ❌ コンパイルエラー
// arr は number[] 型なので、push に文字列を渡すと型エラー
// エラー内容: Argument of type '"foobar"' is not assignable to parameter of type 'number'.
arr.push("foobar"); // ← string は許可されない