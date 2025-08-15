// タプル型 NumberAndStrings を定義
// 先頭要素は number 型で必須
// 2つ目以降は 0 個以上の string 型
type NumberAndStrings = [number, ...string[]];

// ✅ 先頭が number、後続が string 型なのでOK
const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
// ✅ 先頭だけ number で、後続がない場合もOK
const arr2: NumberAndStrings = [25];

// ❌ 先頭が number でないためエラー
const arr3: NumberAndStrings = ["uhyo", "hyo"];
// ❌ 先頭は number だが、後続に number が来ているためエラー
const arr4: NumberAndStrings = [25, 26, 27];
// ❌ 必須の先頭要素 number がないためエラー
const arr5: NumberAndStrings = [];