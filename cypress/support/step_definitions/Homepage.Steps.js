/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com/";

// Given Steps - Setup/Preconditions
Given(`I visit the WebdriverUniversity page`, () => {
  cy.visit(url);
})

// When Steps - Actions
When(`I click on the Contact Us link`, () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click();
})


