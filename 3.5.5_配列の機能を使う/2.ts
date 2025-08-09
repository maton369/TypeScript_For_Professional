// ✅ readonly number[] 型
// 読み取り専用の数値配列（要素の追加や変更が禁止される）
const arr: readonly number[] = [1, 10, 100];

// ❌ コンパイルエラー
// readonly number[] では push メソッドが存在しないため、要素を追加できない
// エラー内容: Property 'push' does not exist on type 'readonly number[]'.
arr.push(1000); // ← 要素追加は不可