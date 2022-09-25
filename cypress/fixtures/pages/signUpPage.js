import Randomizer from '../helper/helper.js'
class SignUpPage{
    enterEmail(){
        cy.get('#email').type(Randomizer.randomEmail());
        cy.wait(3000)
    }
    enterName(){
        cy.get('#full_name').type('Bob Brandon');
        cy.wait(3000)
    }
    enterPassword(){
        cy.get('#password').type('Password12344$')
        
    }
    checkAgreeTerms(){
        cy.get('div[aria-labelledby="terms-label"]').click();
    }
    clickSubmit(){
        cy.get('button[type="Submit"]').click();
        cy.wait(15000);
        cy.url().should('include', 'sign-up/verify-email/')
    }
    
    }
    
    module.exports = new SignUpPage();