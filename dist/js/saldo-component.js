let saldo = 3003;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
