import garagem from '../../../pages/GaragemPage'
import url from '../../../fixtures/urlGaragem.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        garagem.beforeGaragem()
    })

    it('Acessa e valida URL e texto da página de Comunicação', () => {
        garagem.comunicacao()
        home.validaURL(url.comunicacao)
            .validatexto('Comunicação')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Garagem', () => {
        garagem.garagens()
        home.validaURL(url.garagem)
            .validatexto('Garagem')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Últimas Comunicações', () => {
        garagem.ultimascomunicacoes()
        home.validaURL(url.ultimasComunicacoes)
            .validatexto('Últimas Comunicações')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        garagem.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })
})