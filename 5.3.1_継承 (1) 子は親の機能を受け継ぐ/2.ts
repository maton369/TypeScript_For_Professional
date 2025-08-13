// Userクラスのインスタンスを受け取り、挨拶文を返す関数
function getMessage(u: User) {
    // u.nameをテンプレート文字列で埋め込み
    return `こんにちは、${u.name}さん`;
}

// Userクラスのインスタンスを生成（年齢15）
const john = new User("John Smith", 15);
// PremiumUserクラスのインスタンスを生成（年齢26）
const uhyo = new PremiumUser("uhyo", 26);

// getMessageにUserインスタンスを渡す
console.log(getMessage(john)); // "こんにちは、John Smithさん" と表示される
// getMessageにPremiumUserインスタンスを渡す（Userを継承しているのでOK）
console.log(getMessage(uhyo)); // "こんにちは、uhyoさん" と表示される