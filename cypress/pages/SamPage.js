import login from '../pages/LoginPage'
import home from '../pages/HomePage'

class SamPage {

    beforeSam() {
        login.loginAndCaptureCookies()
        home
            .sam()
            .idiomaPortugues()
    }

    validaTextoSam() {
        cy.get('span:contains("Sam")').click()
        return this
    }
}
export default new SamPage