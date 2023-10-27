import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class MidiaPage {

    beforeMidia() {
        login.loginAndCaptureCookies()
        home
            .tiposDeUso()
            .midia()
            .idiomaPortugues()
    }

    validaURL(url) {
        cy.url({ force: true }).should('eq', url, { force: true })
        return this
    }

    validatexto(texto) {
        cy.contains(texto).should('have.text', texto)
        return this
    }

    ordemGravacao() {
        cy.contains('Ordem de gravação').click({ force: true })
        return this
    }

    limiteUso() {
        cy.contains('Limite de uso').click({ force: true })
        return this
    }

    grupoTempo() {
        cy.contains('Grupo de tempo').click({ force: true })
        return this
    }

    grupoRelatorio() {
        cy.contains('Grupos de Relatório').click({ force: true })
        return this
    }

    produtoTransporte() {
        cy.contains('Produto de transporte').click({ force: true })
        return this
    }

    tipoMidia() {
        cy.contains('Tipo de mídia').click({ force: true })
        return this
    }

    produtoExterno() {
        cy.contains('Produto externo').click({ force: true })
        return this
    }

    razoesHotlist() {
        cy.contains('Razões de Hotlist').click({ force: true })
        return this
    }

    hotlistMidia() {
        cy.contains('Hotlist de mídia').click({ force: true })
        return this
    }

    hotlistProduto() {
        cy.contains('Hotlist de Produto').click({ force: true })
        return this
    }

    hotlistPermanente() {
        cy.contains('Hotlist Permanente').click({ force: true })
        return this
    }

    cotas() {
        cy.contains('Cotas').click({ force: true })
        return this
    }

    arquivosMidia() {
        cy.contains('Arquivos de Midia').click({ force: true })
        return this
    }

    recargas() {
        cy.contains('Recargas').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }
}
export default new MidiaPage