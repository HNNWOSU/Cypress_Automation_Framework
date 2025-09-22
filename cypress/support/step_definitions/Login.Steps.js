/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Login_PO from "../page_objects/Login_PO";

const base_PO = new Base_PO();
const login_PO = new Login_PO();

// And Steps - Additional Actions
// const url = "https://www.webdriveruniversity.com/";

// Given Steps - Setup/Preconditions
Given(`I navigate to the webdriver University Login Page`, () => {
  // cy.visit(url);
  login_PO.navigateToLoginPage();
  base_PO.getPageTitle();
})

// When Steps - Actions
When(`I click on the Login Portal Link`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  cy.clickAndOpenLink_InSameTab("#login-portal");
})

// Single step definition for handling credentials
let stub;
When('I enter a {} and {}', (username, password) => {
      // cy.get('input[placeholder="Username"]').type(username);
      // cy.get('input[type="password"]').type(password); 
      login_PO.type_Username(username);
      login_PO.type_Password(password);
});

When('I click on Login Button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    // cy.get('button[type="submit"]').click();
    login_PO.click_LoginButton();
});

Then(`I should be presented with a pop up {}`, (expectedAlertText) => {
  expect(stub).to.have.been.calledWith(expectedAlertText);
});


