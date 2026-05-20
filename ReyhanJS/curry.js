function hitung(operasi) {
    const a = parseFloat(document.getElementById("num1").value)
    const b = parseFloat(document.getElementById("num2").value)

    let hasil;

    if (operasi === "kali") {
        hasil = a * b;
    } else if (operasi === "bagi") {
        if (b === 0) {
            hasil = "Tidak bisa dibagi nol!";
        } else {
        hasil = a / b;  
        }
    }
    document.getElementById("hasil").textContent = hasil;
}