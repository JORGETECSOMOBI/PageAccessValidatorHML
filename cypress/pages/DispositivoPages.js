import login from '../pages/LoginPage'
import home from '../pages/HomePage'
import url from '../fixtures/urlDispositivos.json'

class DispositivosPage {

    beforeDispositivos() {
        login.loginAndCaptureCookies()
        home
            .dispositivos()
            .validaURL(url.dispositivo)
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    feriado() {
        cy.contains('Feriado').click({ force: true })
        return this
    }

    dispositivos() {
        cy.contains('Dispositivos').click({ force: true })
        return this
    }

    firmware() {
        cy.contains('Firmware').click({ force: true })
        return this
    }

    parametros() {
        cy.contains('Parâmetros').click({ force: true })
        return this
    }

    configOeracoes() {
        cy.contains('Configuração de operação').click({ force: true })
        return this
    }

    mensagensDisplay() {
        cy.contains('Mensagens display').click({ force: true })
        return this
    }

    configDispositivo() {
        cy.contains('Config Dispositivo').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos operacionais').click({ force: true })
        return this
    }

    hardware() {
        cy.contains('Hardware').click({ force: true })
        return this
    }
}
export default new DispositivosPage