import url from '../../../fixtures/urlAbt.json'
import abt from '../../../pages/AbtPage'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        abt.beforeAbt()
    })

    it('Acessa e valida URL e texto da página de Carteira', () => {
        abt.carteira()
        home.validaURL(url.carteira)
            .validatexto('Carteira')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Razões de Hotlist', () => {
        abt.razoesHotlist()
        home.validaURL(url.razoesDeHotlist)
            .validatexto('Razões de Hotlist')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Razões de transação', () => {
        abt.razoesTransacao()
        home.validaURL(url.razoesdeTransacao)
            .validatexto('Razões de transação')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos de ABT', () => {
        abt.arquivosAbt()
        home.validaURL(url.arquivosDeAbt)
            .validatexto('Arquivos de ABT')
            .validaAusenciaMensagensDeErrro()
    })
})