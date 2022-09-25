
class MainPage{

    closeCookies(){
        cy.get('button[aria-label="close and deny"]').click();
    }
    clickSignUpButton(){
        cy.get('header ul a[href="/sign-up"]').eq(1).click({force: true});
        cy.location('pathname').should('eq', '/sign-up')
    }
    clickLoginButton(){
        cy.get('header a[href="https://portal.telnyx.com/"]').eq(0).click({force: true});
        cy.url().should('include', '/login/sign-in')
    }
    clickTalkWithExpert(){
        cy.get('a[href="/contact-us"]').eq(0).click({force: true});
        cy.location('pathname').should('eq', '/contact-us')
    }
    clickJoinStorage(){
        cy.get('a[href="/products/storage"]').eq(0).click({force: true});
        cy.location('pathname').should('eq', '/products/storage')
    }
    clickResourcesBlog(){
        cy.xpath('//span[text() = "Resources"]').click({force: true});
        cy.wait(3000)
        cy.get('a[href="/resources"]').eq(0).click({force: true});
        cy.wait(3000)
        cy.location('pathname').should('eq', '/resources')
    }
    clickReportAbuse(){
        cy.get('a[href="/report-abuse"]').click();
        cy.location('pathname').should('eq', '/report-abuse');  
    }
    }
    
    
    module.exports = new MainPage();