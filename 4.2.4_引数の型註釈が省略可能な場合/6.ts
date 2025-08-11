// 配列 nums の中から 3 で割り切れる要素だけを抽出する
const arr2 = nums.filter(x => x % 3 === 0);
// filter の引数は、各要素に対して true を返すとその要素が結果に残る関数
// ここでは、x % 3 === 0 が true となる要素（3の倍数）だけを残す

console.log(arr2); // [3, 6, 9] と表示される