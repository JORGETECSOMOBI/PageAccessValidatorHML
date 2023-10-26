import comercializacao from '../../../pages/ComercializacaoPage'
import url from '../../../fixtures/urlComercializacao.json'
import home from '../../../pages/HomePage'
import midia from '../../../pages/MidiaPage'

describe('Acessando e validando Url e Texto de todas as páginas', () => {

    beforeEach(() => {
        comercializacao.beforeComercializacao()
    })

    it('Acessa e valida URL e texto da página de Dashboard', () => {
        comercializacao.dashboard()
        home.validaURL(url.dashboard)
            .validatexto('Dashboard')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Rede de vendas', () => {
        comercializacao.redeDeVendas()
        home.validaURL(url.redeDeVendas)
            .validatexto('Rede de vendas')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Resumo rede de vendas', () => {
        comercializacao.resumoDeVendas()
        home.validaURL(url.resumoDeVendas)
            .validatexto('Resumo rede de vendas')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Taxa de Administração', () => {
        comercializacao.taxaDeAdministracao()
        home.validaURL(url.taxaDeAdministracao)
            .validatexto('Taxa de Administração')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Forma de pagamento', () => {
        comercializacao.formaDePagamento()
        home.validaURL(url.formaDePagamento)
            .validatexto('Forma de pagamento')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Serviços', () => {
        comercializacao.servicos()
        home.validaURL(url.servicos)
            .validatexto('Serviços')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Plano', () => {
        comercializacao.plano()
        home.validaURL(url.plano)
            .validatexto('Plano')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Fechamento ATM', () => {
        comercializacao.fechamentoAtm()
        home.validaURL(url.fechamentoAtm)
            .validatexto('Fechamento ATM')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivos de Sangria', () => {
        comercializacao.motivosDeSangria()
        home.validaURL(url.motivosDESangria)
            .validatexto('Motivos de Sangria')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Recibo', () => {
        comercializacao.recibo()
        home.validaURL(url.recibo)
            .validatexto('Recibo')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Lista de Transações', () => {
        comercializacao.listaDeTransacoes()
        home.validaURL(url.listaDeTransacoes)
            .validatexto('Lista de Transações')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivos de Voucher', () => {
        comercializacao.motivosDeVoucher()
        home.validaURL(url.motivosDeVoucher)
            .validatexto('Motivos de Voucher')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Lista de Vouchers', () => {
        comercializacao.listaDeVouchers()
        home.validaURL(url.listaDeVouchers)
            .validatexto('Lista de Vouchers')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Arquivos Operacionais', () => {
        comercializacao.arquivosOperacionais()
        home.validaURL(url.arquivosOperacionais)
            .validatexto('Arquivos Operacionais')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Solicitar voucher', () => {
        comercializacao.solicitarVoucher()
        home.validaURL(url.solicitarVoucher)
            .validatexto('Solicitar voucher')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Ordem de Recarga', () => {
        comercializacao.ordemDeRecarga()
        home.validaURL(url.ordemDeRecarga)
            .validatexto('Ordem de recarga')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivo de Liberação', () => {
        comercializacao.motivoDeLiberacao()
        home.validaURL(url.motivoDeLiberacao)
            .validatexto('Motivo de Liberação')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Motivo de Cancelamento', () => {
        comercializacao.motivoDeCancelamento()
        home.validaURL(url.motivoDeCancelamento)
            .validatexto('Motivo de Cancelamento')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Cadastro de Canais', () => {
        comercializacao.cadastroDeCanais()
        home.validaURL(url.cadastroDeCanais)
            .validatexto('Cadastro de Canais')
        midia.validaAusenciaMensagensDeErrro()
    })

    it('Acessa e valida URL e texto da página de Relatórios', () => {
        comercializacao.relatorios()
        home.validaURL(url.relatorios)
            .validatexto('Relatórios')
        midia.validaAusenciaMensagensDeErrro()
    })
})