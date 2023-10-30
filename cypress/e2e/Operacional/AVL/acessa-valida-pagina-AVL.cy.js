import avl from '../../../pages/AvlPage'
import url from '../../../fixtures/url.Avl.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        avl.beforeAvl()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        avl.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Target', () => {
        avl.target()
        home.validaURL(url.targets)
            .validatexto('Target')
            .validaAusenciaMensagensDeErrro()
    })
})