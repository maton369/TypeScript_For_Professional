// ✅ number[]型
// 要素がすべて number 型なので、配列の型は number[] になる
const arr = [1, 10, 100];

// ✅ (string | number | boolean)[] 型
// 要素に number, string, boolean が混在しているため、
// 型はそれらのユニオン型の配列 (string | number | boolean)[] になる
const arr2 = [100, "文字列", false];