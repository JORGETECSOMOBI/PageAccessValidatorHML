import tarifario from '../../../pages/TarifarioPage'
import url from '../../../fixtures/urlTarifario.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        tarifario.beforeTarifario()
    })

    it('Acessa e valida URL e texto da página de Regras', () => {
        tarifario.regras()
        home.validaURL(url.regras)
            .validatexto('Regras')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Descontos', () => {
        tarifario.descontos()
        home.validaURL(url.descontos)
            .validatexto('Descontos')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Sessões', () => {
        tarifario.sessoes()
        home.validaURL(url.sessoes)
            .validatexto('Sessões')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupo de linha (ltg)', () => {
        tarifario.grupoDeLinha()
        home.validaURL(url.grupoDeLinha)
            .validatexto('Grupo de linha (ltg)')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupo de Integração', () => {
        tarifario.grupoDeIntegracao()
        home.validaURL(url.grupoDeIntegracao)
            .validatexto('Grupo de Integração')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Correlação tarifária', () => {
        tarifario.correlacaoTarifaria()
        home.validaURL(url.correlacaoTarifaria)
            .validatexto('Correlação tarifária')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Integração', () => {
        tarifario.integracao()
        home.validaURL(url.integracao)
            .validatexto('Integração')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        tarifario.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })
})