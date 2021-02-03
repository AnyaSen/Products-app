import "cypress-file-upload";

Cypress.Commands.add("fillGeneralInfo", (name, euros, cents, pricePerKg) => {
  cy.get('input[placeholder="Name"]').type(name);
  cy.get('input[placeholder="Euros"]').type(euros);
  cy.get('input[placeholder="Cents"]').type(cents);
  cy.get('input[placeholder="Price (per kg)"]').type(pricePerKg);
  cy.get('[type="checkbox"]')
    .first()
    .check();
});

Cypress.Commands.add("fillDescription", description => {
  cy.get('textarea[placeholder="Describe the product..."]').type(description);
});

Cypress.Commands.add("addImage", () => {
  const file = "tomatos.jpg";
  const fileInput = "[data-cy=dropzone]";

  cy.fixture(file).then(fileContent => {
    cy.get(fileInput).attachFile(
      { fileContent, fileName: file, mimeType: "image/jpg" },
      { subjectType: "drag-n-drop" }
    );
    cy.contains("Drop a file here...");
  });

  cy.contains(file);
});

Cypress.Commands.add("fillTheForm", () => {
  cy.visit("/create");
  cy.fillGeneralInfo("Test", 2, 99, 13);
  cy.fillDescription("SomeDescription");
  cy.addImage();
  cy.get("[data-cy=submit-button]").click();
});
