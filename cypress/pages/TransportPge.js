import login from '../pages/LoginPage'
import home from '../pages/HomePage'
import url from '../fixtures/urlTransporte.json'

class TransportePage {

    beforeTransporte() {
        login.loginAndCaptureCookies()
        home
            .transporte()
            .validaURL(url.transporte)
            .idiomaPortugues()
    }

    terminal() {
        cy.contains('Terminal').click({ force: true })
        return this
    }

    grupoDeterminais() {
        cy.contains('Grupo de terminais').click({ force: true })
        return this
    }

    contrloleDeTrilhos() {
        cy.contains('Controle de trilhos').click({ force: true })
        return this
    }

    sindicato() {
        cy.contains('Sindicato').click({ force: true })
        return this
    }

    orgaoGestor() {
        cy.contains('Órgão gestor').click({ force: true })
        return this
    }

    consorcio() {
        cy.contains('Consórcio').click({ force: true })
        return this
    }

    grupoDeOperadora() {
        cy.contains('Grupo de operadora').click({ force: true })
        return this
    }

    operadora() {
        cy.contains('Operadora').click({ force: true })
        return this
    }

    grupoDeOperador() {
        cy.get('a[href="/transport/operatorGroups"]').click()

        return this
    }

    linha() {
        cy.contains('Linha').click({ force: true })
        return this
    }

    grupoDeLinha() {
        cy.contains('Grupo de linha').click({ force: true })
        return this
    }

    motivosDeHotlist() {
        cy.contains('Motivos de hotlist').click({ force: true })
        return this
    }

    calendarioOperacional() {
        cy.contains('Calendário operacional').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }
}
export default new TransportePage