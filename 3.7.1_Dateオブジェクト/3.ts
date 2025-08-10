// "2020-02-03T15:00:00+09:00" という日時文字列から Date オブジェクトを作成
const date = new Date("2020-02-03T15:00:00+09:00");

// getTime() は、1970/1/1 00:00:00 UTC からの経過ミリ秒を返す
const timeNum = date.getTime();
console.log(timeNum); // 1580709600000 と表示される

// ミリ秒値から再び Date オブジェクトを生成
const date2 = new Date(timeNum);

// 環境のローカルタイムゾーン（ここでは日本標準時）で表示される
console.log(date2); // Mon Feb 03 2020 15:00:00 GMT+0900 (日本標準時)