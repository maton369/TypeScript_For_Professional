// fastify フレームワークをインポート
import fastify from "fastify";

// Fastify アプリケーションのインスタンスを作成
const app = fastify();

// HTTP GET メソッドで "/" パスにアクセスされたときのルートを定義
// req: リクエストオブジェクト
// reply: レスポンスオブジェクト
app.get('/', (req, reply) => {
    // クライアントに文字列 "Hello, world!" を返す
    reply.send("Hello, world!");
});

// サーバーをポート 8080 で起動
// listen() は Promise を返すため、エラー処理は then/catch または async/await で行うのが望ましい
app.listen({ port: 8080 })
    .then(() => {
        console.log("🚀 Server is running at http://localhost:8080");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });