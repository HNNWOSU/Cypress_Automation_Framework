import {When,Before, After} from "@badeball/cypress-cucumber-preprocessor";

// Before Hook - Runs before each scenario
Before(() => {
    cy.log("Executes Before Easch Scenario?Test.");
    cy.clearLocalStorage();
    
});

Before({tags: "@smoke"}, () => {
    cy.log("Executes Before Smoke Pack.");
    
});

//After Hook - Runs after each scenario
After(() => {
    cy.log("Executes After Each Scenario?Test.");

});

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
});
