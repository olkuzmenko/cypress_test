class ServicesAndDataPage{
    searchCurrencyUSD(){
        cy.get('button[aria-haspopup="listbox"]').click();
        cy.xpath('//div[text()="USD"]').click();
        cy.get('main>div:nth-child(2)').should('to.contain', '$').and('not.to.contain', 'A$')
    }
    searchCurrencyAUD(){
        cy.get('button[aria-haspopup="listbox"]').click();
        cy.xpath('//div[text()="AUD"]').click();
        cy.get('main>div:nth-child(2)').should('to.contain', 'A$').and('not.to.contain', '€')
    }
    searchCurrencyGBP(){
        cy.get('button[aria-haspopup="listbox"]').click();
        cy.xpath('//div[text()="GBP"]').click();
        cy.get('main>div:nth-child(2)').should('to.contain', '£').and('not.to.contain', '$')
    }
    searchCurrencyEUR(){
        cy.get('button[aria-haspopup="listbox"]').click();
        cy.xpath('//div[text()="EUR"]').click();
        cy.get('main>div:nth-child(2)').should('to.contain', '€').and('not.to.contain', '$')
    }
    
    }
    
    module.exports = new ServicesAndDataPage();