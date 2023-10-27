import arrecadacao from '../../../pages/ArrecadacaoPage'
import url from '../../../fixtures/urlArredacao.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        arrecadacao.beforeArrecadacao()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        arrecadacao.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Serviço', () => {
        arrecadacao.servico()
        home.validaURL(url.servico)
            .validatexto('Serviço')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Realizar Coleta', () => {
        arrecadacao.realizarColeta()
        home.validaURL(url.realizarColeta)
            .validatexto('Realizar Coleta')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Processamento de arquivos', () => {
        arrecadacao.processamentoDeArquivos()
        home.validaURL(url.processamentoDeArquivos)
            .validatexto('Processamento de arquivos')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Uso', () => {
        arrecadacao.uso()
        home.validaURL(url.uso)
            .validatexto('Uso')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupo de coleta', () => {
        arrecadacao.grupoDeColeta()
        home.validaURL(url.grupoDeColeta)
            .validatexto('Grupo de coleta')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Teste de catraca', () => {
        arrecadacao.testeDeCatraca()
        home.validaURL(url.testeDeCatraca)
            .validatexto('Teste de catraca')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Tipo grupo de coleta', () => {
        arrecadacao.tipoGrupoDeColeta()
        home.validaURL(url.tipoGrupoDeColeta)
            .validatexto('Tipo grupo de coleta')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Coleta', () => {
        arrecadacao.coleta()
        home.validaURL(url.coleta)
            .validatexto('Data coleta')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos de Midia', () => {
        arrecadacao.arquivosDeMidia()
        home.validaURL(url.arquivosDeMidia)
            .validatexto('Arquivos de Midia')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        arrecadacao.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })
})
