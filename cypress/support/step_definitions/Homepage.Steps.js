/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page-objects/Base_PO";

// const url = "https://www.webdriveruniversity.com/";

const base_PO = new Base_PO();

// Given Steps - Setup/Preconditions
Given(`I visit the WebdriverUniversity page`, () => {
  // cy.visit(url);
  base_PO.navigate("");
  base_PO.getPageTitle();
})

// When Steps - Actions
When(`I click on the Contact Us link`, () => {
  // cy.get("#contact-us").invoke("removeAttr", "target").click();
  cy.clickAndOpenLink_InSameTab("#contact-us");
})


