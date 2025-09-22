import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO {

    elements = {
        comment_TextField: () => cy.get('textarea[name="message"]'),
        submit_Button: () => cy.get('input[type="submit"]'),
        validate_Submission_Header: () => cy.get('h1'),
        validate_Submission_ErrorMessage: () => cy.get('body').contains('Error: all fields are required')
    };

    navigateToContactUsPage() {
        super.navigate("contact-us/contactus.html");
    }

    type_FirstName(firstname){
        cy.get('input[name="first_name"]').type(firstname);
    }

    type_LastName(lastname){
        cy.get('input[name="last_name"]').type(lastname);
    }

    type_Email(email){
        cy.get('input[name="email"]').type(email);
    }

    type_Comments(comments){
        this.elements.comment_TextField().type(comments);
    }

    click_SubmitButton(){
        this.elements.submit_Button().click();
    }
    validate_SubmissionHeader(expectedText){
        this.elements.validate_Submission_Header().should("have.text", expectedText);
    }
    validate_ErrorMessage(){
        this.elements.validate_Submission_ErrorMessage().should('be.visible');
    }



}
export default Contact_Us_PO;
