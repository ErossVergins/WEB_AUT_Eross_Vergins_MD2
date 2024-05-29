describe("Scenario 2", () => {

    it("form", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get("#btn-make-appointment").click();
        cy.get("#txt-username").type("John Doe");
        cy.get("#txt-password").type("ThisIsNotAPassword");
        cy.get("#btn-login").click();

        cy.get("#menu-toggle").click();
        cy.get("#sidebar-wrapper").should("have.class", "active");

        cy.get("a[href='history.php#history']").click();
        cy.url().should("include", "/history");
    
        cy.get("#history p").should("contain.text", "No appointment");
    });
    
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
        });
    });