describe('Post search', () => {
    it('passes', () => {
        cy.visit('https://arstechnica.com')

        cy.get('#header-search > a')
            .click()
        cy.get('#hdr_search_input')
            .click()
            .type('Why NASA’s return to the Moon{enter}')
            
        //Assertion
        cy.get(':nth-child(1) > .gs-webResult > .gsc-thumbnail-inside > div.gs-title > .gs-title')
            .should('be.visible')
    })
})