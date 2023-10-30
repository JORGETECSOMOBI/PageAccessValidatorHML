import facial from '../../../pages/FacialPage'
import url from '../../../fixtures/urlFacial.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        facial.beforeFacial()
    })

    it('Acessa e valida URL e texto da página de Audit', () => {
        facial.audit()
        home.validaURL(url.audit)
            .validatexto('Audit')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivo de irregularidade', () => {
        facial.motivoDeIrregularidade()
        home.validaURL(url.motivoDeIrregularidade)
            .validatexto('Motivo de irregularidade')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Perfis', () => {
        facial.perfis()
        home.validaURL(url.perfis)
            .validatexto('Perfis')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        facial.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })
})