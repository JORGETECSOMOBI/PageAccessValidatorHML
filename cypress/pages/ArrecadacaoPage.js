import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class ArrecadacaoPage {

    beforeArrecadacao() {
        login.loginAndCaptureCookies()
        home
            .arrecadacao()
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    servico() {
        cy.contains('Serviço').click({ force: true })
        return this
    }

    realizarColeta() {
        cy.contains('Realizar Coleta').click({ force: true })
        return this
    }

    processamentoDeArquivos() {
        cy.contains('Processamento de arquivos').click({ force: true })
        return this
    }

    uso() {
        cy.contains('Uso').click({ force: true })
        return this
    }

    grupoDeColeta() {
        cy.contains('Grupo de coleta').click({ force: true })
        return this
    }

    tipoGrupoDeColeta() {
        cy.contains('Tipo grupo de coleta').click({ force: true })
        return this
    }

    coleta() {
        cy.get('a[href="/ticketing/collections"]').click()
        return this
    }

    testeDeCatraca() {
        cy.contains('Teste de catraca').click({ force: true })
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
}
export default new ArrecadacaoPage