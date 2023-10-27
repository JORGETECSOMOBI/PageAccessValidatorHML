class HomePage {

    recentAcessTitle() {
        cy.get('[title="Acessos recentes"]').eq(1).click({ force: true })
        return this
    }

    hometitle() {
        cy.get('a.ant-anchor-link-title[title="Home"]').eq(1).should("be.visible").click({ force: true })
        return this
    }

    todosOsServiçosTitle() {
        cy.get('[title="Todos os serviços"]').click({ force: true })
        return this
    }

    idiomaIngles() {
        cy.get('.ant-select-selection-item').click({ force: true })
        cy.get('div.ant-row').contains('EN').click({ force: true })
        return this
    }

    idiomaPortugues() {
        cy.get('.ant-select-selection-item').click({ force: true })
        cy.get('p.mastermastertext-0-2-18').contains('PT').click({ force: true })
        return this
    }

    tiposDeUso() {
        cy.get('#allServices div div:nth-child(1) div span').click({ force: true })
        return this
    }

    qrCode() {
        cy.get('[href="/qrcode"] > .ant-row > .ant-typography').eq(0).click({ force: true })
        cy.get('aside div:nth-child(1) ul li:nth-child(4) span a').click({ force: true })
        return this
    }

    midia() {
        cy.get('[href="/media"] > .ant-row > .ant-typography').eq(0).click({ force: true })
        return this
    }

    emv() {
        cy.get('[href="/emv"] > .ant-row > .ant-typography').eq(0).click({ force: true })
        return this
    }

    abt() {
        cy.get('[href="/abt"] > .ant-row > .ant-typography').eq(0).click({ force: true })
        return this
    }

    operacional() {
        cy.get('span.ant-collapse-header-text').contains('Operacional').click({ force: true })
        return this
    }

    dispositivos() {
        cy.get('[href="/device"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    transporte() {
        cy.get('[href="/transport"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    tarifario() {
        cy.get('[href="/fare"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    usuario() {
        cy.get('[href="/user"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    comercializacao() {
        cy.get('[href="/commerce"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    arrecadacao() {
        cy.get('[href="/ticketing"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    garagem() {
        cy.get('[href="/depot"] > .ant-row > .ant-typography', { force: true }).click({ force: true })
        return this
    }

    avl() {
        cy.get('[href="/avl"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    sistema() {
        cy.get('[href="/system"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    sam() {
        cy.get('[href="/sam"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    facial() {
        cy.get('[href="/facial"] > .ant-row > .ant-typography').click({ force: true })
        return this
    }

    validaURL(url) {
        cy.url({ force: true }).should('eq', url, { force: true })
        return this
    }

    validatexto(texto) {
        cy.contains(texto, { force: true }).should('have.text', texto, { force: true })
        return this
    }

    validaAusenciaDetexto(texto) {
        cy.should('not.contain', texto)
        return this
    }

    validatextoElemento(texto) {
        cy.get('.ant-row-start > .ant-typography').contains(texto, { force: true }).should('have.text', texto, { force: true })
        return this
    }

    validaAusenciaMensagensDeErrro() {
        this.validaAusenciaDetexto('Ocorreu um erro ao processar sua solicitação')
        this.validaAusenciaDetexto('Error inesperado')
        return this
    }
}
export default new HomePage