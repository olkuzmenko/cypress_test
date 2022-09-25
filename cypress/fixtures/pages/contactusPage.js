import Randomizer from '../helper/helper.js'
class ContactUsPage{

    chooseOption(){
        cy.get('#Reason_for_Contact__c').select('Support');
        

    }
    enterFirstLastName(){
        cy.get('#FirstName').type(Randomizer.randomeStr());
        cy.get('#LastName').type(Randomizer.randomeStr());
    }
    enterMail(){
        cy.get('#Email').type(Randomizer.randomEmail());
    }
    enterPhone(){
        cy.get('#Phone_Number_Extension__c').select('+44');
        cy.get('#Phone_Number_Base__c').type('7548032890')
    }
    enterWebsite(){
        cy.get('#Website').type('http://www.example.com/')
    }
    checkReceivingEmail(){
        cy.get('input[type="checkbox"]').check();
    }
    clickSubmit(){
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/thank-you');
        cy.get('h1').should('to.have.text', 'Thanks for Reaching Out!')
    }
    }
    
    
    module.exports = new ContactUsPage();