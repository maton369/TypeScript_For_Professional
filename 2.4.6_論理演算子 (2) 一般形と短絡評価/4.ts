// 環境変数 SECRET を取得。ただし SECRET が undefined または null の場合は "default" を使用する
const secret = process.env.SECRET ?? "default";

// 取得した secret をコンソールに出力
console.log(`secretは${secret}です`);