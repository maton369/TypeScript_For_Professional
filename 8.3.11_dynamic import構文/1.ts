import("fs/promises")
    .then(({ readFile }) =>
        // import が成功したら readFile を呼び出す
        readFile("foo.txt", "utf8")
    )
    .then((result) => {
        // ファイルの内容を出力
        console.log(result);
    })
    .catch((error) => {
        // import に失敗した場合やファイルが存在しない場合などのエラーを捕捉
        console.log("エラーが発生しました！！！！", error);
    });