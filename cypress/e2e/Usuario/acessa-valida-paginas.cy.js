import usuario from '../../pages/UsuarioPage'
import url from '../../fixtures/url.json'
import home from '../../pages/HomePage'


describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        usuario.beforeUsuario()
        home.usuario()     
    })

    it('Valida url e texto na página de usuário', () => {
        home.validaURL(url.usuario)
        home.validatexto('Novo usuário')
    })

    it('Valida url e texto na página de Organização', () => {
        usuario.acessandoTelaOrganizaçao()
        home.validaURL(url.organizacao)
            .validatexto('Organização')
    })

    it('Valida url e texto na página de Tipo de usuário', () => {
        usuario.acessandoTelaTiposDeUsuario()
        home.validaURL(url.tipoUsuario)
            .validatexto('Tipo de Usuário')
    })

    it('Valida url e texto na página de Postos de atendimento', () => {
        usuario.acessandoTelaPostosDeAtendimento()
        home.validaURL(url.postoAtendimento)
            .validatexto('Postos de atendimento')
    })

    it('Valida url e texto na página de Equipamento PCD', () => {
        usuario.acessandoTelaEquipamentoPcD()
        home.validaURL(url.pcd)
            .validatexto('Equipamento PcD')
    })

    it('Valida url e texto na página de Período Estudantil', () => {
        usuario.acessandoTelaPeriodoEstudantil()
        home.validaURL(url.periodoEstudantil)
            .validatexto('Período estudantil')
    })

    it('Valida url e texto na página de Tipo de estudante', () => {
        usuario.acessandoTelaTipoDeEstudante()
        home.validaURL(url.tipoEstudante)
            .validatexto('Tipo de estudante')
    })

    it('Valida url e texto na página de Nível de escolaridade', () => {
        usuario.acessandoTelaNivelDeEscolaridade()
        home.validaURL(url.escolaridade)
            .validatexto('Nível de escolaridade')
    })

    it('Valida url e texto na página de Tipos de documentos', () => {
        usuario.acessandoTelaTipoDeDocumentos()
        home.validaURL(url.tipoDocumento)
            .validatexto('Tipos de Documentos')
    })

    it('Valida url e texto na página de iCD', () => {
        usuario.acessandoTelaICD()
        home.validaURL(url.icd)
            .validatexto('ICD')
    })
})