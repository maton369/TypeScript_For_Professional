// 長さ単位をミリメートル(mm)基準で換算するための変換テーブル
const mmConversionTable = {
    mm: 1,      // 1 mm = 1 mm
    m: 1e3,     // 1 m = 1000 mm
    km: 1e6,    // 1 km = 1,000,000 mm
};

/**
 * 単位変換関数
 * @param value - 変換したい値
 * @param unit  - 値の単位（"mm" | "m" | "km" のいずれか）
 * @returns mm, m, km に換算した値を持つオブジェクト
 */
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    // 入力値を mm に換算
    const mmValue = value * mmConversionTable[unit];

    // mm, m, km での値を返す
    return {
        mm: mmValue,           // mm の値
        m: mmValue / 1e3,      // m に換算
        km: mmValue / 1e6      // km に換算
    };
}

// 例: 5600 m を mm / m / km に換算
// { "mm": 5600000, "m": 5600, "km": 5.6 } と表示される
console.log(convertUnits(5600, "m"));