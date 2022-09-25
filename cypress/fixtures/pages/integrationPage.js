import Randomizer from '../helper/helper.js'
class IntegrationPage{
    scroleToForm(){
        cy.get('#become-a-beta-tester').scrollIntoView().should('be.visible')
        cy.wait(5000)
    }
    enterFirstName(){
        cy.get('#FirstName').type(Randomizer.randomeStr())
    }
    enterLastName(){
        cy.get('#LastName').type(Randomizer.randomeStr())
    }
    enterIndustry(){
        cy.get('#Industry').type(Randomizer.randomeStr())
    }
    enterEmail(){
        cy.get('#Email').type(Randomizer.randomEmail())
    }
    enterCompanyWebsite(){
        cy.get('#Website').type('http://website.cc')
    }
    selectUseCase(){
        cy.get('#Use_Case_Form__c').select('Call Tracking')
    }
    clickSubmitBtn(){
        cy.get('button[type="submit"]').click();
        cy.wait(2000)
    }
    validAssertion(){
        cy.url().should('eq', 'https://go.telnyx.com/prog-video-follow-up.html');
        cy.get('.richTextSpan').should('to.contain', 'Thanks for your interest!')
    }
    invalidAssertion(){
        cy.get('div .mktoError').should('be.visible')
    }

    
    }
    
    module.exports = new IntegrationPage();