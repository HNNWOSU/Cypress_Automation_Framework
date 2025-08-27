/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page-objects/Base_PO";

const base_PO = new Base_PO();

// And Steps - Additional Actions
// const url = "https://www.webdriveruniversity.com/";

// Given Steps - Setup/Preconditions
Given(`I visit the WebdriverUniversity Homepage`, () => {
  // cy.visit(url);
  base_PO.navigate("");
})

// When Steps - Actions
When(`I click on the Login Portal Link`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  cy.clickAndOpenLink_InSameTab("#login-portal");
})

// Single step definition for handling credentials
let stub;
When("I enter a {} and {}", (username, password) => {
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[type="password"]').type(password); 
});

When("I click on Login Button", () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('button[type="submit"]').click();
});

Then(`I should be presented with a pop up {}`, (expectedAlertText) => {
  expect(stub).to.have.been.calledWith(expectedAlertText);
});


