import Conta from "../types/Conta.js";
import { FormatoData } from "../types/formatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { ResumoTransacoes } from "../types/ResumoTransacoes.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato()
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    const resumoTransacoes: ResumoTransacoes = Conta.getTransacoesAgrupadas();
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem: string = "";

        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }
    htmlRegistroTransacoes += `
        <div>
            <strong class="resumo-transacoes" >Resumo  das transações:</strong>
            <div>
                <p class="total-transacoes">depósitos: </br>${formatarMoeda(resumoTransacoes.totalDepositos)}</p>
                <p class="total-transacoes">transferências: </br>${formatarMoeda(resumoTransacoes.totalTransferencias)}</p>
                <p class="total-transacoes">pagamento de boletos: </br>${formatarMoeda(resumoTransacoes.totalPagamentosBoleto)}</p>
            </div>
        </div>
        `
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato( );
    }
}

export default ExtratoComponent;