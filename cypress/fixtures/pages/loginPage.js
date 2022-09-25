
class LoginPage{
    enterAuthorizeEmail(){
        cy.get('div[name="login"] input[name="email"]').type('example23456761123@gmail.com')
    }
    enterPassword(){
        cy.get('input[name="password"]').type('Telnyx123456@')
    }
    clickLogin(){
        cy.get('button[class*="LoginForm"]').click();   
    }
    checkAuthorization(){
        cy.get('div[data-testid="login.signin.title"]').should('to.have.text', 'Verify your phone number')
    }
    enterPhone(){
        cy.get('input[class*="PhoneNumberField"]').type('+447548032890');
    }
    clickSendCode(){
        cy.get('button[type="submit"]').click();
        cy.get('div[type="error"]').should('be.visible')
    }

    }
    
    
    module.exports = new LoginPage();