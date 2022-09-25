import Randomizer from '../helper/helper.js'
class ReportAbusePage{
    enterSubject(){
        cy.get('input[label="Subject"]').type(Randomizer.randomeStr())
    }
    enterPhoneAbusive(){
        cy.get('input[name="abusivePhoneNumber"]').type('+12345678910')
    }
    enterAbusedPhone(){
        cy.get('input[name="abusedPhoneNumber"]').type('+12345678912')
    }
    enterDataOfAbuse(){
        cy.get('#abusedDateTime').clear().type('10/29/2022 2:03 PM')
        cy.get('h2').eq(1).click()
    }
    dataError(){
        cy.get('#abusedDateTime_error').should('be.visible')
    }
    clickCheckboxVoice(){
        cy.get('label[for="serviceAbusedVoice"]').click();
    }
    clickCheckboxSMS(){
        cy.get('label[for="serviceAbusedSms"]').click()
    }
    clickSubmitBtn(){
        cy.get('button[type="submit"]').click();
    }
    errorMessage(){
        cy.get('div[role="alert"]').should('be.visible')
    }
    }
    
    
    module.exports = new ReportAbusePage();