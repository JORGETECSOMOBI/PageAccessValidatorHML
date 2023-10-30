import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class AbtPage {

    beforeAbt() {
        login.loginAndCaptureCookies()
        home
            .tiposDeUso()
            .abt()
            .idiomaPortugues()
    }

    carteira() {
        cy.contains('Carteira').click({ force: true })
        return this
    }

    razoesHotlist() {
        cy.contains('Razões de Hotlist').click({ force: true })
        return this
    }

    razoesTransacao() {
        cy.contains('Razões de transação').click({ force: true })
        return this
    }

    arquivosAbt() {
        cy.contains('Arquivos de ABT').click({ force: true })
        return this
    }
}
export default new AbtPage