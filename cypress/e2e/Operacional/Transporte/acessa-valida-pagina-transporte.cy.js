import transporte from '../../../pages/TransportPge'
import url from '../../../fixtures/urlTransporte.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        transporte.beforeTransporte()
    })

    it('Acessa e valida URL e texto da página de Terminal', () => {
        transporte.terminal()
        home.validaURL(url.terminal)
            .validatexto('Terminal')
    })

    it('Acessa e valida URL e texto da página de Grupo de terminais', () => {
        transporte.grupoDeterminais()
        home.validaURL(url.gurpoTerminais)
            .validatexto('Grupo de terminais')
    })

    it('Acessa e valida URL e texto da página de Controle de trilhos', () => {
        transporte.contrloleDeTrilhos()
        home.validaURL(url.controleTrilhos)
            .validatexto('Controle de trilhos')
    })

    it('Acessa e valida URL e texto da página de Sindicato', () => {
        transporte.sindicato()
        home.validaURL(url.sindicato)
            .validatexto('Sindicato')
    })

    it('Acessa e valida URL e texto da página de Órgão gestor', () => {
        transporte.orgaoGestor()
        home.validaURL(url.orgaoGestor)
            .validatexto('Órgão gestor')
    })

    it('Acessa e valida URL e texto da página de Consórcio', () => {
        transporte.consorcio()
        home.validaURL(url.consorcio)
            .validatexto('Consórcio')
    })

    it('Acessa e valida URL e texto da página de Grupo de operadora', () => {
        transporte.grupoDeOperadora()
        home.validaURL(url.grupoOperadora)
            .validatexto('Grupo de operadora')
    })

    it('Acessa e valida URL e texto da página de Operadora', () => {
        transporte.operadora()
        home.validaURL(url.operadora)
            .validatexto('Operadora')
    })

    it('Acessa e valida URL e texto da página de Grupo de operador', () => {
        transporte.grupoDeOperador()
        home.validaURL(url.grupoDeOperador)
            .validatextoElemento('Grupo de operador')
    })

    it('Acessa e valida URL e texto da página de Calendário operacional', () => {
        transporte.calendarioOperacional()
        home.validaURL(url.calendarioOperacional)
            .validatexto('Calendário operacional')
    })

    it('Acessa e valida URL e texto da página de Linha', () => {
        transporte.linha()
        home.validaURL(url.linha)
            .validatexto('Linha')
    })

    it('Acessa e valida URL e texto da página de Grupo de linha', () => {
        transporte.grupoDeLinha()
        home.validaURL(url.grupoDeLinha)
            .validatexto('Grupo de linha')
    })

    it('Acessa e valida URL e texto da página de Motivos de hotlist', () => {
        transporte.motivosDeHotlist()
        home.validaURL(url.motivoHotlist)
            .validatexto('Motivos de hotlist')
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        transporte.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
    })
})