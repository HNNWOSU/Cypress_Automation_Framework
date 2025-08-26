import {When, Then} from "@badeball/cypress-cucumber-preprocessor";


// And Steps - Additional Actions
When(`I type a First Name`, () => {
    cy.get('input[name="first_name"]').type("John");
  
})

When(`I type a Last Name`, () => {
    cy.get('input[name="last_name"]').type("Doe");
  
})

When(`I enter a valid email address`, () => {
    cy.get('input[name="email"]').type("john.doe@example.com");

})

When(`I type a comment`, () => {
    cy.get('textarea[name="message"]').type("This is a test comment.");

})

When(`I submit the form`, () => {
    cy.get('input[type="submit"]').click();

})

Then(`I should see a success message confirming the submission`, () => {
    cy.get('h1').should("have.text", 'Thank You for your Message!');
  
})

Then(`I should see an error message indicating the required fields`, () => {
    cy.get('body').should('contain.text', 'Error: all fields are required');
})

When(`I type a "First Name" field with {string}`, (firstName) => {
    cy.get('input[name="first_name"]').type(firstName);
})

When(`I type a "Last Name" field with {string}`, (lastName) => {
    cy.get('input[name="last_name"]').type(lastName);
})

When(`I enter a valid email address {string}`, (email) => {
    cy.get('input[name="email"]').type(email);
})

When(`I type a comment {string} and number {int}`, (word, number) => {
    cy.get('textarea[name="message"]').type(`${word} ${number}`);
})

When(`I type in a {word} and {string}`, (firstName, lastName) => {
    cy.get('input[name="first_name"]').type(firstName);
    cy.get('input[name="last_name"]').type(lastName);
})

When(`I type in a  {string} and {string}`, (email, comment) => {
    cy.get('input[name="email"]').type(email);
    cy.get('textarea[name="message"]').type(comment);
})

Then(`I should be presented with a header text {string}`, (message) => {
  // Then Step - Flexible validation for both positive and negative scenarios

  if (message === 'Thank You for your Message!') {
    // SUCCESS SCENARIO
    // Verify that the URL includes the thank-you page identifier
    cy.url().should('include', 'contact-form-thank-you');
    // Assert that the h1 element contains the expected success message text
    cy.get('h1').should('have.text', message);
    
  } else if (message.includes('Error:')) { // Fixed: .includes() not .contains()
    // ERROR SCENARIO
    // This is the key fix - use .should() for proper assertion
    // Assert that the body element contains the expected error message text
    cy.get('body').should('contain.text', message);
    
    // Verify we're still on contact form, i.e. not redirected to thank-you page
    cy.url().should('not.include', 'contact-form-thank-you');
       
  } else {
    // STRICT: Don't allow unexpected message formats   
    throw new Error(`Unexpected message: "${message}". Must be either success or error message.`);
  }
});


