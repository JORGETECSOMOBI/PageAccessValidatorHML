import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class QrcodePage {

    beforeQrcode() {
        login.loginAndCaptureCookies()
        home
            .tiposDeUso()
            .qrCode()
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    produto() {
        cy.contains('Produto').click({ force: true })
        return this
    }

    lote() {
        cy.contains('Lote').click({ force: true })
        return this
    }

    qrCode() {
        cy.contains('QR Code').click({ force: true })
        return this
    }

    uso() {
        cy.contains('Uso').click({ force: true })
        return this
    }

    arquivosDeMidia() {
        cy.contains('Arquivos de Mídia').click({ force: true })
        return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }

    resumoDeQrcode() {
        cy.contains('Resumo de QR Code').click({ force: true })
        return this
    }

    consulta() {
        cy.contains('Consulta').click({ force: true })
        return this
    }
}
export default new QrcodePage