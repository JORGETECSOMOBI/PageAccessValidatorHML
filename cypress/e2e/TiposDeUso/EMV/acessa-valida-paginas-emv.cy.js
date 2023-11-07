import url from '../../../fixtures/urlEmv.json'
import emv from '../../../pages/EmvPage'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        emv.beforeEmv()
    })

    it('Acessa e valida URL e texto da página de Resumo de emv', () => {
        emv.resumoDeEmv()
        home.validaURL(url.resumodeEmv)
            .validatexto('Resumo de emv')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        emv.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Cartões', () => {
        emv.cartoes()
        home.validaURL(url.cartoes)
            .validatexto('Cartões')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos de Midia', () => {
        emv.arquivosDeMidia()
        home.validaURL(url.arquivosDemidia)
            .validatexto('Arquivos de Midia')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Par', () => {
        emv.par()
        home.validaURL(url.par)
            .validatexto('Par')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        emv.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de BIN', () => {
        emv.bin()
        home.validaURL(url.bin)
            .validatexto('BIN')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivos de Hotlist', () => {
        emv.motivosDeHotlist()
        home.validaURL(url.motivosDeHotlist)
            .validatexto('Motivos de Hotlist')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hotlist', () => {
        emv.hotlist()
        home.validaURL(url.hotlist)
            .validatexto('CARTÕES EM HOTLIST POR DIA')
            .validaAusenciaMensagensDeErrro()
    })

    it.skip('Acessa e valida URL e texto da página de Terminal Adquirente', () => {
        emv.terminalAdquirente()
        home.validaURL(url.terminalAdquirente)
            .validatexto('Terminal Adquirente')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hotlist Par', () => {
        emv.hotlistPar()
        home.validaURL(url.hotlistPar)
            .validatexto('Hotlist Par')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Retentativa', () => {
        emv.retentativa()
        home.validaURL(url.retentetiva)
            .validatexto('Retentativa')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Usos', () => {
        emv.usos()
        home.validaURL(url.usos)
            .validatexto('Usos')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Produtos', () => {
        emv.produtos()
        home.validaURL(url.produtos)
            .validatexto('Produtos')
            .validaAusenciaMensagensDeErrro()
    })
})