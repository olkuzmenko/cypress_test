class ResourcesPage{
    incorrectSearch(){
        cy.get('#search').type('CALLCENTER').type('{enter}')
    }

    incorrectSearchResult(){
        cy.url().should('to.contain', '/resources/search?q=CALLCENTER');
        cy.get('#articles').should('to.contain', 'No results found for')
    }
    backToAllResult(){
        cy.get('a[href="/resources"]').click();
        cy.url().should('eq', 'https://telnyx.com/resources')
    }
    correctSearch(){
        cy.get('#search').type('CALL CENTER').type('{enter}')
    }
    correctSearchResult(){
        cy.url().should('to.contain', '/resources/search?q=CALL%20CENTER');
        cy.get('#articles').should('to.contain', 'Search results for "CALL CENTER"')
    }
    emailSubscribe(){
        cy.get('#Email').scrollIntoView().type('example12345@gmail.com');
        cy.get('button[type="submit"]').click();
        cy.wait(4000);
        cy.get('button[type="submit"]').should('not.be.disabled')
    }


}

    
    module.exports = new ResourcesPage();