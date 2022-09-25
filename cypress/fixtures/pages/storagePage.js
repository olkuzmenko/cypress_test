import Randomizer from '../helper/helper.js'
class StoragePage{
    clickJoinTheWaitlist(){
        cy.get('a[href="#form"]').eq(0).click();

    }
    enterFirstLastName(){
        cy.get('#FirstName').type(Randomizer.randomeStr());
        cy.get('#LastName').type(Randomizer.randomeStr());   
    }
    enterMail(){
        cy.get('#Email').type(Randomizer.randomEmail());
    }
    clickApplyButton(){
        cy.get('button[type="submit"]').click();
        cy.get('h1 span').should('to.have.text', "You're on the waitlist!");
        cy.location('pathname').should('eq', '/products/storage-waitlist');
    }
    enterText(){
        cy.get('#Form_Additional_Information__c').type('TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest');
        cy.wait(5000)
    }
    clickTakeMeBack(){
        cy.get('main a[href="/products/storage"]').eq(0).click();
        cy.location('pathname').should('eq', '/products/storage')
    }
    }
    
    module.exports = new StoragePage();