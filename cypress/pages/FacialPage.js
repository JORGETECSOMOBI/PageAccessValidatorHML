import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class FacialPage {

    beforeFacial() {
        login.loginAndCaptureCookies()
        home
            .facial()
            .idiomaPortugues()
    }

    audit() {
        cy.contains('Audit').click({ force: true })
        return this
    }

    motivoDeIrregularidade() {
        cy.contains('Motivo de irregularidade').click({ force: true })
        return this
    }

    perfis() {
        cy.get('a[href="/facial/profiles"]').click({ force: true })
            return this
    }

    arquivosOperacionais() {
        cy.contains('Arquivos Operacionais').click({ force: true })
        return this
    }
}
export default new FacialPage