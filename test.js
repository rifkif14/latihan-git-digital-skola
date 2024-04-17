// Fungsi untuk menambahkan dua angka
function penjumlahan(a, b) {
    return a + b;
}

// Fungsi untuk mengurangkan dua angka
function pengurangan(a, b) {
    return a - b;
}

// Fungsi untuk mengalikan dua angka
function perkalian(a, b) {
    return a * b;
}

// Fungsi untuk membagi dua angka
function pembagian(a, b) {
    if (b === 0) {
        return "Tidak bisa dibagi oleh nol";
    }
    return a / b;
}

// Fungsi untuk kalkulator
function kalkulator(operasi, a, b) {
    switch (operasi) {
        case '+':
            return penjumlahan(a, b);
        case '-':
            return pengurangan(a, b);
        case '*':
            return perkalian(a, b);
        case '/':
            return pembagian(a, b);
        default:
            return "Operasi tidak valid";
        }
    }
// Contoh penggunaan
const hasilPenjumlahan = kalkulator('+', 6, 5.5);
console.log(hasilPenjumlahan);