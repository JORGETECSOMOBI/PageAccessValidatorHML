import comercializacao from '../../../pages/ComercializacaoPage'
import url from '../../../fixtures/urlComercializacao.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        comercializacao.beforeComercializacao()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        comercializacao.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Rede de vendas', () => {
        comercializacao.redeDeVendas()
        home.validaURL(url.redeDeVendas)
            .validatexto('Rede de vendas')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Resumo rede de vendas', () => {
        comercializacao.resumoDeVendas()
        home.validaURL(url.resumoDeVendas)
            .validatexto('Resumo rede de vendas')
            .validaAusenciaMensagensDeErrro()
    })

    it.skip('Acessa e valida URL e texto da página de Taxa de Administração', () => {
        comercializacao.taxaDeAdministracao()
        home.validaURL(url.taxaDeAdministracao)
            .validatexto('Taxa de Administração')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Forma de pagamento', () => {
        comercializacao.formaDePagamento()
        home.validaURL(url.formaDePagamento)
            .validatexto('Forma de pagamento')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Serviços', () => {
        comercializacao.servicos()
        home.validaURL(url.servicos)
            .validatexto('Serviços')
            .validaAusenciaMensagensDeErrro()
    })

    it.skip('Acessa e valida URL e texto da página de Plano', () => {
        comercializacao.plano()
        home.validaURL(url.plano)
            .validatexto('Plano')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Fechamento ATM', () => {
        comercializacao.fechamentoAtm()
        home.validaURL(url.fechamentoAtm)
            .validatexto('Fechamento ATM')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivos de Sangria', () => {
        comercializacao.motivosDeSangria()
        home.validaURL(url.motivosDESangria)
            .validatexto('Motivos de Sangria')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Recibo', () => {
        comercializacao.recibo()
        home.validaURL(url.recibo)
            .validatexto('Recibo')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Lista de Transações', () => {
        comercializacao.listaDeTransacoes()
        home.validaURL(url.listaDeTransacoes)
            .validatexto('Lista de Transações')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivos de Voucher', () => {
        comercializacao.motivosDeVoucher()
        home.validaURL(url.motivosDeVoucher)
            .validatexto('Motivos de Voucher')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Lista de Vouchers', () => {
        comercializacao.listaDeVouchers()
        home.validaURL(url.listaDeVouchers)
            .validatexto('Lista de Vouchers')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        comercializacao.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Solicitar voucher', () => {
        comercializacao.solicitarVoucher()
        home.validaURL(url.solicitarVoucher)
            .validatexto('Solicitar voucher')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Ordem de Recarga', () => {
        comercializacao.ordemDeRecarga()
        home.validaURL(url.ordemDeRecarga)
            .validatexto('Ordem de recarga')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivo de Liberação', () => {
        comercializacao.motivoDeLiberacao()
        home.validaURL(url.motivoDeLiberacao)
            .validatexto('Motivo de Liberação')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivo de Cancelamento', () => {
        comercializacao.motivoDeCancelamento()
        home.validaURL(url.motivoDeCancelamento)
            .validatexto('Motivo de Cancelamento')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Cadastro de Canais', () => {
        comercializacao.cadastroDeCanais()
        home.validaURL(url.cadastroDeCanais)
            .validatexto('Cadastro de Canais')
            .validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Relatórios', () => {
        comercializacao.relatorios()
        home.validaURL(url.relatorios)
            .validatexto('Relatórios')
            .validaAusenciaMensagensDeErrro()
    })
})