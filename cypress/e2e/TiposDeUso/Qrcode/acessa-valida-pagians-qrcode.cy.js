import url from '../../../fixtures/urlQrcode.json'
import qrcode from '../../../pages/QrcodePage'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        qrcode.beforeQrcode()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        qrcode.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Produto', () => {
        qrcode.produto()
        home.validaURL(url.produto)
            .validatexto('Produto')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Lote', () => {
        qrcode.lote()
        home.validaURL(url.lote)
            .validatexto('Lote')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de QR Code', () => {
        qrcode.qrCode()
        home.validaURL(url.qrcode)
            .validatexto('QR Code')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Uso', () => {
        qrcode.uso()
        home.validaURL(url.uso)
            .validatexto('Uso')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos de Mídia', () => {
        qrcode.arquivosDeMidia()
        home.validaURL(url.arquivosDeMidia)
            .validatexto('Arquivos de Mídia')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        qrcode.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Resumo de QR Code', () => {
        qrcode.resumoDeQrcode()
        home.validaURL(url.resumoDeQrcode)
            .validatexto('Resumo de QR Code')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Consulta', () => {
        qrcode.consulta()
        home.validaURL(url.consulta)
            .validatexto('Consulta')
            .validaAusenciaMensagensDeErrro()
    })
})