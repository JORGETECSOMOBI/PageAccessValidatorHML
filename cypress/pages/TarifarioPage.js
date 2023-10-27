import login from '../pages/LoginPage'
import home from '../pages/HomePage'
import url from '../fixtures/urlTarifario.json'

class TarifarioPage {

    beforeTarifario() {
        login.loginAndCaptureCookies()
        home
            .tarifario()
            .validaURL(url.tarifario)
            .idiomaPortugues()
    }

    regras() {
        cy.contains('Regras').click({ force: true })
        return this
    }

    descontos() {
        cy.contains('Descontos').click({ force: true })
        return this
    }

    sessoes() {
        cy.contains('Sessões').click({ force: true })
        return this
    }

    grupoDeLinha() {
        cy.contains('Grupo de linha (ltg)').click({ force: true })
        return this
    }

    grupoDeIntegracao() {
        cy.contains('Grupo de integração').click({ force: true })
        return this
    }

    correlacaoTarifaria() {
        cy.contains('Correlação tarifária').click({ force: true })
        return this
    }

    integracao() {
        cy.contains('Integração').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }
}
export default new TarifarioPage