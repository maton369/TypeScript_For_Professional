// Promise.all の結果を分割代入で直接受け取る例
p.then(([foo, bar, baz]) => {
    // foo, bar, baz にそれぞれのファイル内容が格納されている
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
});