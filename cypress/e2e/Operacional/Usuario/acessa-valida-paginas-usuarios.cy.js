import usuario from '../../../pages/UsuarioPage'
import url from '../../../fixtures/urlUsuarios.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
    })

    it('Valida url e texto na página de usuário', () => {
        home.validaURL(url.usuario)
        home.validatexto('Novo usuário')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Organização', () => {
        usuario.acessandoTelaOrganizaçao()
        home.validaURL(url.organizacao)
            .validatexto('Organização')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Tipo de usuário', () => {
        usuario.acessandoTelaTiposDeUsuario()
        home.validaURL(url.tipoUsuario)
            .validatexto('Tipo de Usuário')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Postos de atendimento', () => {
        usuario.acessandoTelaPostosDeAtendimento()
        home.validaURL(url.postoAtendimento)
            .validatexto('Postos de atendimento')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Equipamento PCD', () => {
        usuario.acessandoTelaEquipamentoPcD()
        home.validaURL(url.pcd)
            .validatexto('Equipamento PcD')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Período Estudantil', () => {
        usuario.acessandoTelaPeriodoEstudantil()
        home.validaURL(url.periodoEstudantil)
            .validatexto('Período estudantil')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Tipo de estudante', () => {
        usuario.acessandoTelaTipoDeEstudante()
        home.validaURL(url.tipoEstudante)
            .validatexto('Tipo de estudante')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Nível de escolaridade', () => {
        usuario.acessandoTelaNivelDeEscolaridade()
        home.validaURL(url.escolaridade)
            .validatexto('Nível de escolaridade')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de Tipos de documentos', () => {
        usuario.acessandoTelaTipoDeDocumentos()
        home.validaURL(url.tipoDocumento)
            .validatexto('Tipos de Documentos')
            .validaAusenciaMensagensDeErrro()
    })

    it('Valida url e texto na página de iCD', () => {
        usuario.acessandoTelaICD()
        home.validaURL(url.icd)
            .validatexto('ICD')
            .validaAusenciaMensagensDeErrro()
    })
})