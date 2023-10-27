import url from '../../../fixtures/urlMidias.json'
import midia from '../../../pages/MidiaPage'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        midia.beforeMidia()
    })

    it('Acessa e valida URL e texto da página de mídia', () => {
        home.validaURL(url.midia)
            .validatexto('Mídias')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Ordem de gravação', () => {
        midia.ordemGravacao()
        home.validaURL(url.ordemGravacao)
            .validatexto('Ordem de gravação')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Limite de uso', () => {
        midia.limiteUso()
        home.validaURL(url.limiteUso)
            .validatexto('Limite de uso')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupo de tempo', () => {
        midia.grupoTempo()
        home.validaURL(url.grupoTempo)
            .validatexto('Grupo de tempo')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Grupos de Relatório', () => {
        midia.grupoRelatorio()
        home.validaURL(url.GrupoRelatorio)
            .validatexto('Grupos de Relatório')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Produtos de transporte', () => {
        midia.produtoTransporte()
        home.validaURL(url.produtoTransporte)
            .validatexto('Produtos de transporte')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Tipo de mídia', () => {
        midia.tipoMidia()
        home.validaURL(url.tipoMidias)
            .validatexto('Tipo de mídia')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Produtos de transporte externo', () => {
        midia.produtoExterno()
        home.validaURL(url.produtoExterno)
            .validatexto('Produtos de transporte externo')
    })

    it('Acessa e valida URL e texto da página de Razões de Hotlist', () => {
        midia.razoesHotlist()
        home.validaURL(url.razoesHotlist)
            .validatexto('Razões de Hotlist')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hotlist de mídia', () => {
        midia.hotlistMidia()
        home.validaURL(url.hotlistMidia)
            .validatexto('Hotlist de mídia')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hotlist de Produto', () => {
        midia.hotlistProduto()
        home.validaURL(url.hotListProduto)
            .validatexto('Hotlist de mídia')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Hotlist Permanente', () => {
        midia.hotlistPermanente()
        home.validaURL(url.horlistPermanente)
            .validatexto('Hotlist Permanente')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Cotas', () => {
        midia.cotas()
        home.validaURL(url.cotas)
            .validatexto('Cotas')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos de Midia', () => {
        midia.arquivosMidia()
        home.validaURL(url.arquivosMidia)
            .validatexto('Arquivos de Midia')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Recargas', () => {
        midia.recargas()
        home.validaURL(url.recargas)
            .validatexto('Recargas')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        midia.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
        midia.validaAusenciaMensagensDeErrro()
    })
})
