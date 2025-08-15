// uhyo.js 内で export const getUhyoName = () => "uhyo"; と定義済み
import { getUhyoName } from "./uhyo.js";

// 関数を呼び出してテンプレートリテラルで文字列を生成
console.log(`uhyoの名前は${getUhyoName()}です`);