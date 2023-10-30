import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class AvlPage {

    beforeAvl() {
        login.loginAndCaptureCookies()
        home
            .avl()
            .idiomaPortugues()
    }

    dashboard() {
        cy.contains('Dashboard').click({ force: true })
        return this
    }

    target() {
        cy.contains('Target').click({ force: true })
        return this
    }
}
export default new AvlPage