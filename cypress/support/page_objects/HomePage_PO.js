import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
    navigateToHomepage() {
        super.navigate("");
    }

    clickOnContactUs() {
        cy.clickAndOpenLink_InSameTab("#contact-us");
    }

    clickOnLoginPortal() {
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }



}
export default Homepage_PO;