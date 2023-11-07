import sistema from '../../../pages/SistemaPage'
import url from '../../../fixtures/urlSistema.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        sistema.beforeSistema()
    })

    it('Acessa e valida URL e texto da página de Usuário', () => {
        sistema.usuario()
        home.validaURL(url.usuario)
            .validatexto('Usuário')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupo de usuários', () => {
        sistema.grupoDeUsuario()
        home.validaURL(url.grupoDeUsuario)
            .validatexto('Grupo de usuário')
            .validaAusenciaMensagensDeErrro()
    })

    it.skip('Acessa e valida URL e texto da página de Grupo de clientes', () => {
        sistema.grupoDeClientes()
        home.validaURL(url.grupoDeClientes)
            .validatexto('Grupo de Clientes')
            .validaAusenciaMensagensDeErrro()
    })

    it.skip('Acessa e valida URL e texto da página de clientes', () => {
        sistema.Cliente()
               .validaTextoCliente()
        home.validaURL(url.cliente)
            .validaAusenciaMensagensDeErrro()
    })
})