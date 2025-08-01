const foo = { obj: { num: 1234 } }; // foo は obj プロパティを持つオブジェクト
const bar = { ...foo };             // foo をスプレッド構文でコピー（浅いコピー）

bar.obj.num = 0;                    // bar の中の obj.num を変更

console.log(foo.obj.num);          // 0 と表示される ← foo.obj も同じオブジェクトを参照しているため