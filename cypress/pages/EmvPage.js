import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class EmvPage {

    beforeEmv() {
        login.loginAndCaptureCookies()
        home
            .tiposDeUso()
            .emv()
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    cartoes() {
        cy.contains('Cartões').click({ force: true })
        return this
    }

    par() {
        cy.contains('Par').click({ force: true })
        return this
    }

    bin() {
        cy.contains('BIN').click({ force: true })
        return this
    }

    motivosDeHotlist() {
        cy.contains('Motivos de Hotlist').click({ force: true })
        return this
    }

    hotlist() {
        cy.get('a[href="/emv/hotlists"]').click({ force: true })
        return this
    }

    hotlistPar() {
        cy.contains('Hotlist Par').click({ force: true })
        return this
    }

    retentativa() {
        cy.contains('Retentativa').click({ force: true })
        return this
    }

    usos() {
        cy.contains('Usos').click({ force: true })
        return this
    }

    produtos() {
        cy.contains('Produtos').click({ force: true })
        return this
    }

    resumoDeEmv() {
        cy.contains('Resumo de emv').click({ force: true })
        return this
    }

    arquivosDeMidia() {
        cy.contains('Arquivos de Midia').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }

    terminalAdquirente() {
        cy.contains('Terminal Adquirente').click({ force: true })
        return this
    }
}
export default new EmvPage