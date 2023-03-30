function addOnDisplay(value) {
    document.getElementById("display").value += value;
}

function hapusDisplay() {
    document.getElementById("display").value = "";
}

function hasil() {
    var hasil = document.getElementById("display").value;
    var hasilnya = eval(hasil);
    document.getElementById("display").value = hasilnya;
}


