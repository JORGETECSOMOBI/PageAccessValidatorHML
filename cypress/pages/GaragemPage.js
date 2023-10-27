import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class GaragemPage {

    beforeGaragem() {
        login.loginAndCaptureCookies()
        home
            .garagem()
            .idiomaPortugues()
    }

    garagens() {
        cy.get('a[href="/depot/depots"]').click()
        return this
    }

    comunicacao() {
        cy.contains('Comunicação').click({ force: true })
        return this
    }

    ultimascomunicacoes() {
        cy.contains('Últimas Comunicações').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }
}
export default new GaragemPage