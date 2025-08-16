readFile("foo.txt", "utf8")          // foo.txt を非同期で読み込む (Promise<string> を返す)
    .then((result) => repeat10(result)) // 読み込んだ文字列を repeat10 に渡して10回繰り返す Promise<string> を返す
    .then((result) => {                 // repeat10 が解決されたら、その結果を受け取る
        console.log(result);              // 画面に出力
    });