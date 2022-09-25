
class PricingCalculatorPage{
    elements ={
        localNumbers : () => cy.get('#local-numbers'),
        checking : () => cy.xpath('//div[contains(text(), "Need more than")]').should('be.visible')
        }
    clickOptionMessaging(){
        cy.xpath('//div[text()="Messaging API"]').click();
    }
    clickOptionElastic(){
        cy.xpath('//div[text()="Elastic SIP Trunking"]').click()
    }
    clickOptionVoice(){
        cy.xpath('//div[text()="Voice API"]').click()
    }
    clickContinueButton(){
        cy.xpath('//button[text()="Continue"]').click()
    }
    chooseLocalNumber(){
        this.elements.localNumbers().clear().type(100000);
        this.elements.localNumbers().clear().type(100001);
        this.elements.checking();
        this.elements.localNumbers().clear().type(0)
        this.elements.localNumbers().clear().type(9999)
    }
    sendSms(){
        cy.get('#send-sms').clear().type(10000001);
        this.elements.checking();
        cy.get('#send-sms').clear()
    }
    receiveSms(){
        cy.get('#receive-sms').clear().type(10000001);
        this.elements.checking();
        cy.get('#receive-sms').clear();
    }
    sendMms(){
        cy.get('#send-mms').clear().type(10000001);
        this.elements.checking();
        cy.get('#send-mms').clear();
    };
    receiveMms(){
        cy.get('#receive-mms').clear().type(10000001);
        this.elements.checking();
        cy.get('#receive-mms').clear();
    };
    receiveLocalNumbers(){
        cy.get('#receive-inbound-calls-to-local-numbers').clear().type(10000001);
        this.elements.checking();
        cy.get('#receive-inbound-calls-to-local-numbers').clear();
    };
    receiveTollFreeNumbers(){
        cy.get('#receive-inbound-calls-to-toll-free-numbers').clear().type(10000001);
        this.elements.checking();
        cy.get('#receive-inbound-calls-to-toll-free-numbers').clear(); 
    };
    makeOutboundCalls(){
        cy.get('#make-outbound-calls').clear().type(10000001);
        this.elements.checking();
        cy.get('#make-outbound-calls').clear(); 
    };
    receiveCallControl(){
        cy.get('#receive-inbound-calls-with-call-control').clear().type(10000001);
        this.elements.checking();
        cy.get('#receive-inbound-calls-with-call-control').clear();
    };
    makeCallControl(){
        cy.get('#make-outbound-calls-with-call-control').clear().type(10000001);
        this.elements.checking();
        cy.get('#make-outbound-calls-with-call-control').clear();

    }
    }
    
    
    module.exports = new PricingCalculatorPage();