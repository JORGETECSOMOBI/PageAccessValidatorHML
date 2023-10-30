import dispositivos from '../../../pages/DispositivoPages'
import url from '../../../fixtures/urlDispositivos.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        dispositivos.beforeDispositivos()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        dispositivos.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Dispositivos', () => {
        dispositivos.dispositivos()
        home.validaURL(url.dispositivos)
            .validatexto('Dispositivos')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Feriado', () => {
        dispositivos.feriado()
        home.validaURL(url.feriado)
            .validatexto('Feriado')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Firmware', () => {
        dispositivos.firmware()
        home.validaURL(url.firmware)
            .validatexto('Firmware')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Parâmetros', () => {
        dispositivos.parametros()
        home.validaURL(url.parametros)
            .validatexto('Parâmetros')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Configuração de operação', () => {
        dispositivos.configOeracoes()
        home.validaURL(url.configuracaoDeOperacao)
            .validatexto('Configuração de operação')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Mensagens display', () => {
        dispositivos.mensagensDisplay()
        home.validaURL(url.mensagensDisplay)
            .validatexto('Mensagens display')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Config Dispositivo', () => {
        dispositivos.configDispositivo()
        home.validaURL(url.configDispositivo)
            .validatexto('Config Dispositivo')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos operacionais', () => {
        dispositivos.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos operacionais')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hardware', () => {
        dispositivos.hardware()
        home.validaURL(url.hardware)
            .validatexto('Hardware')
            .validaAusenciaMensagensDeErrro()
    })
})