/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/HomePage_PO";

// const url = "https://www.webdriveruniversity.com/";

const base_PO = new Base_PO();
const homepage_PO = new Homepage_PO();

// Given Steps - Setup/Preconditions
Given(`I visit the WebdriverUniversity page`, () => {
  // cy.visit(url);
  homepage_PO.navigateToHomepage();
  base_PO.getPageTitle();
})

// When Steps - Actions
When(`I click on the Contact Us link`, () => {
  // cy.get("#contact-us").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#contact-us");
  homepage_PO.clickOnContactUs();
})

When(`I click on the Login Portal Link`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  homepage_PO.clickOnLoginPortal();
})


