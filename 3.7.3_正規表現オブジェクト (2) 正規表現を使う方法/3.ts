// 正規表現 /a(?<worldName>b+)c/ の意味:
//   a                        → 'a' という文字
//   (?<worldName>b+)         → 名前付きキャプチャグループ
//                               'b' が1回以上連続する部分を "worldName" という名前で取得
//   c                        → 'c' という文字
// match() の結果 result.groups に、名前付きキャプチャグループの結果がオブジェクトで格納される
const result = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);

if (result !== null) {
    // result.groups は { worldName: "bbbbbb" } というオブジェクトになる
    console.log(result.groups); // { "worldName": "bbbbbb" } と表示される
}