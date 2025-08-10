// Map<string, number> の意味:
//   - キーの型: string
//   - 値の型: number
//   つまり「文字列 → 数値」の対応を保持するマップ

// 空の Map を生成
const map: Map<string, number> = new Map();

// "foo" というキーに 1234 という値をセット
map.set("foo", 1234);

// 既に登録した "foo" の値を取得 → 1234 が返る
console.log(map.get("foo")); // 1234 と表示される

// 存在しないキー "bar" の値を取得 → undefined が返る
console.log(map.get("bar")); // undefined と表示される