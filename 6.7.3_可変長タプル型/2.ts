// タプル型 NumberStringNumber を定義
// 先頭: number 型（必須）
// 中間: 0個以上の string 型
// 末尾: number 型（必須）
type NumberStringNumber = [number, ...string[], number];

// ✅ 先頭 number → string 複数 → 末尾 number なのでOK
const arr1: NumberStringNumber = [25, "uhyo", "hyo", 0];
// ✅ 先頭 number → 末尾 number（中間が空）なのでOK
const arr2: NumberStringNumber = [25, 25];

// ❌ 末尾が number でない（string になっている）
const arr3: NumberStringNumber = [25, "uhyo", "hyo", "hyo"];
// ❌ 必須の先頭 number と末尾 number のどちらも欠けている
const arr4: NumberStringNumber = [];
// ❌ 先頭が number でなく string
const arr5: NumberStringNumber = ["uhyo", "hyo", 25];
// ❌ 末尾が number でなく string になっている
const arr6: NumberStringNumber = [25, "uhyo", 25, "hyo"];