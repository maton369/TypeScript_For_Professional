// express フレームワークをインポート
import express from "express";

// Express アプリケーションのインスタンスを作成
const app = express();

// HTTP GET メソッドで "/" パスにアクセスされたときのルートを定義
// req: リクエストオブジェクト
// res: レスポンスオブジェクト
app.get('/', (req, res) => {
    // クライアントに文字列 "Hello, world!" を返す
    res.send("Hello, world!");
});

// サーバーをポート 8080 で起動
// listen() の第2引数にコールバックを渡すことで起動時にログを表示できる
app.listen(8080, () => {
    console.log("🚀 Server is running at http://localhost:8080");
});