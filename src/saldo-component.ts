let saldo: number = 3003;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso)
}