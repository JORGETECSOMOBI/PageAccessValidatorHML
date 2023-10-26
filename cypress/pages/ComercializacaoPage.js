import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class ComercializacaoPage {

    beforeComercializacao() {
        login.loginAndCaptureCookies()
        home
            .comercializacao()
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    redeDeVendas() {
        cy.contains('Rede de vendas').click({ force: true })
        return this
    }

    resumoDeVendas() {
        cy.contains('Resumo rede de vendas').click({ force: true })
        return this
    }

    taxaDeAdministracao() {
        cy.contains('Taxa de Administração').click({ force: true })
        return this
    }

    formaDePagamento() {
        cy.contains('Forma de pagamento').click({ force: true })
        return this
    }

    plano() {
        cy.contains('Plano').click({ force: true })
        return this
    }

    servicos() {
        cy.contains('Serviços').click({ force: true })
        return this
    }

    fechamentoAtm() {
        cy.contains('Fechamento ATM').click({ force: true })
        return this
    }

    motivosDeSangria() {
        cy.contains('Motivos de Sangria').click({ force: true })
        return this
    }

    recibo() {
        cy.contains('Recibo').click({ force: true })
        return this
    }

    listaDeTransacoes() {
        cy.contains('Lista de Transações').click({ force: true })
        return this
    }

    motivosDeVoucher() {
        cy.contains('Motivos de Voucher').click({ force: true })
        return this
    }

    listaDeVouchers() {
        cy.contains('Lista de Vouchers').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }

    solicitarVoucher() {
        cy.contains('Solicitar voucher').click({ force: true })
        return this
    }

    ordemDeRecarga() {
        cy.contains('Ordem de recarga').click({ force: true })
        return this
    }

    motivoDeLiberacao() {
        cy.contains('Motivo de Liberação').click({ force: true })
        return this
    }

    motivoDeCancelamento() {
        cy.contains('Motivo de Cancelamento').click({ force: true })
        return this
    }

    cadastroDeCanais() {
        cy.contains('Cadastro de Canais').click({ force: true })
        return this
    }

    relatorios() {
        cy.contains('Relatórios').click({ force: true })
        return this
    }
}
export default new ComercializacaoPage