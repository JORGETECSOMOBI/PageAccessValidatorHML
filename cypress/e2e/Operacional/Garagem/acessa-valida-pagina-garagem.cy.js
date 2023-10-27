import garagem from '../../../pages/GaragemPage'
import url from '../../../fixtures/urlGaragem.json'
import home from '../../../pages/HomePage'
import midia from '../../../pages/MidiaPage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        garagem.beforeGaragem()
    })

    it('Acessa e valida URL e texto da página de Comunicação', () => {
        garagem.comunicacao()
        home.validaURL(url.comunicacao)
            .validatexto('Comunicação')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Garagem', () => {
        garagem.garagens()
        home.validaURL(url.garagem)
            .validatexto('Garagem')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Últimas Comunicações', () => {
        garagem.ultimascomunicacoes()
        home.validaURL(url.ultimasComunicacoes)
            .validatexto('Últimas Comunicações')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        garagem.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
        midia.validaAusenciaMensagensDeErrro()
    })
})