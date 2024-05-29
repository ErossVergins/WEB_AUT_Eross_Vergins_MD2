describe("Scenario 1", () => {

  it("form", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('.input-group-addon').click();
    cy.get('.datepicker-days').should('be.visible');
    cy.contains('.day', '30').click();
    
    cy.get('#txt_comment').type('CURA Healthcare Service');
    cy.contains('Book Appointment').click();
    
    cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should('contain', 'Yes');
    cy.get('#program').should('contain', 'Medicaid');
    cy.get('#visit_date').should('contain', '30/04/2024');
    cy.get('#comment').should('contain', 'CURA Healthcare Service');
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});