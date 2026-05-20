const hariIni = new Date();

let dd = hariIni.getDate();
let mm = hariIni.getMonth() + 1;
const yyyy = hariIni.getFullYear();

dd = dd < 10 ? '0' + dd : dd;
mm = mm < 10 ? '0' + mm : mm;


console.log(mm + "-" + dd + "-" + yyyy)
console.log(mm + "/" + dd + "/" + yyyy)
console.log(dd + "-" + mm + "-" + yyyy)
console.log(dd + "/" + mm + "/" + yyyy)