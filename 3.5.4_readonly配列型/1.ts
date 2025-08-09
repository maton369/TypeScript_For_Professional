// ✅ readonly number[] 型
// 「読み取り専用」の number 配列型。
// 要素の参照はできるが、要素の書き換えや追加・削除はできない。
const arr: readonly number[] = [1, 10, 100];

// ❌ コンパイルエラー
// readonly 修飾子が付いているため、インデックスでの代入は不可。
// エラー内容: Index signature in type 'readonly number[]' only permits reading.
arr[1] = -500; // ← 書き換えようとしてエラーになる