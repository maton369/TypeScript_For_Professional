// 配列 arr の最初の要素がオブジェクトであることを前提に分割代入を行う
// そのオブジェクトから name プロパティを取り出して変数 name に代入する
const [{ name }] = arr;

// 例:
// arr = [ { name: "uhyo", age: 26 }, { name: "taro", age: 20 } ]
// 上記の場合、name には "uhyo" が入る