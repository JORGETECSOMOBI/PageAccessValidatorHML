import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class SistemaPage {

    beforeSistema() {
        login.loginAndCaptureCookies()
        home
            .sistema()
            .idiomaPortugues()
    }

    usuario() {
        cy.contains('Usuário').click({ force: true })
        return this
    }

    grupoDeUsuario() {
        cy.contains('Grupo de usuário').click({ force: true })
        return this
    }

    grupoDeClientes() {
        cy.contains('Grupo de Clientes').click({ force: true })
        return this
    }

    Cliente() {
        cy.get('a[href="/system/clients"]').click()
        return this
    }

    validaTextoCliente() {
        cy.get('.ant-breadcrumb-link').should('have.text', 'Cliente')
        return this
    }
}
export default new SistemaPage