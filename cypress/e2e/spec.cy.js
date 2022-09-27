import MainPage from '../fixtures/pages/mainPage.js'
import SignUpPage from '../fixtures/pages/signUpPage.js'
import LoginPage from '../fixtures/pages/loginPage.js'
import ContactUsPage from '../fixtures/pages/contactusPage.js'
import ServicesAndDataPage from '../fixtures/pages/servicesAndDataPage.js'
import StoragePage from '../fixtures/pages/storagePage.js'
import ResourcesPage from '../fixtures/pages/resourcesPage.js'
import ReportAbusePage from '../fixtures/pages/reportAbusePage.js'
import PricingCalculatorPage from '../fixtures/pages/pricingCalculatorPage'
import IntegrationPage from '../fixtures/pages/integrationPage.js'

describe('telnyx testcases', () => {
  
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  
  it('Fill talk with expert form', () =>{
    cy.visit('https://telnyx.com/');
    MainPage.closeCookies();
    MainPage.clickTalkWithExpert();
    ContactUsPage.chooseOption();
    ContactUsPage.enterFirstLastName();
    ContactUsPage.enterMail();
    ContactUsPage.enterPhone();
    ContactUsPage.enterWebsite();
    ContactUsPage.checkReceivingEmail();
    ContactUsPage.clickSubmit();
  });
  
  it('Change currency at pricing page', () =>{
    cy.visit('https://telnyx.com/pricing/id-services-and-data');
    ServicesAndDataPage.searchCurrencyUSD();
    ServicesAndDataPage.searchCurrencyAUD();
    ServicesAndDataPage.searchCurrencyGBP();
    ServicesAndDataPage.searchCurrencyEUR();
  });
  
  it('join the Waitlist', () =>{
    cy.visit('https://telnyx.com');
    MainPage.clickJoinStorage();
    StoragePage.clickJoinTheWaitlist();
    StoragePage.enterFirstLastName();
    StoragePage.enterMail();
    StoragePage.enterText();
    StoragePage.clickApplyButton();
    StoragePage.clickTakeMeBack(); 
  });
  
  it('Use search in resources page', () =>{
    cy.visit('https://telnyx.com');
    MainPage.clickResourcesBlog();
    ResourcesPage.incorrectSearch();
    ResourcesPage.incorrectSearchResult();
    ResourcesPage.backToAllResult();
    ResourcesPage.correctSearch();
    ResourcesPage.correctSearchResult(); 
  });
  
  it('create report at Abuse Page', () =>{
    cy.visit('https://telnyx.com');
    MainPage.clickReportAbuse();
    ReportAbusePage.enterSubject();
    ReportAbusePage.enterPhoneAbusive();
    ReportAbusePage.enterAbusedPhone();
    ReportAbusePage.enterDataOfAbuse();
    ReportAbusePage.clickCheckboxVoice();
    ReportAbusePage.clickCheckboxSMS();
    ReportAbusePage.clickSubmitBtn(); 
  });

  it('using invalid data at Pricing Calculator', () =>{
    cy.visit('https://telnyx.com/twilio-pricing-calculator');
    PricingCalculatorPage.clickOptionElastic();
    PricingCalculatorPage.clickOptionMessaging();
    PricingCalculatorPage.clickOptionVoice();
    PricingCalculatorPage.clickContinueButton();
    PricingCalculatorPage.chooseLocalNumber();
    PricingCalculatorPage.clickContinueButton();
    PricingCalculatorPage.sendSms();
    PricingCalculatorPage.receiveSms();
    PricingCalculatorPage.sendMms();
    PricingCalculatorPage.receiveMms();
    PricingCalculatorPage.receiveLocalNumbers();
    PricingCalculatorPage.receiveTollFreeNumbers();
    PricingCalculatorPage.makeOutboundCalls();
    PricingCalculatorPage.receiveCallControl();
    PricingCalculatorPage.makeCallControl();
  });

  
})
