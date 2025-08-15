// 長さ単位とミリメートル換算の変換表を定義する
const mmConversionTable = {
    mm: 1,       // ミリメートル
    cm: 10,      // センチメートル（1cm = 10mm） ←この行を追加
    m: 1e3,      // メートル（1m = 1000mm）
    km: 1e6,     // キロメートル（1km = 1,000,000mm）
};

// 単位を mm/m/km に変換する関数である
// unit は mmConversionTable のキー型に制約される（"mm" | "cm" | "m" | "km"）
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    // 入力値をミリメートルに変換する
    const mmValue = value * mmConversionTable[unit];
    // ミリメートル、メートル、キロメートルの各単位で返す
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6
    };
}

// { mm: 3000000, m: 3000, km: 3 } と表示される
// 300,000cm → 3,000,000mm → 3,000m → 3km
console.log(convertUnits(300000, "cm"));