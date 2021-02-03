describe("ProductPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Renders right headings, a button that takes to the main page.", () => {
    cy.fillTheForm();

    cy.get("[data-cy=products-list]")
      .children()
      .first()
      .click();
    cy.contains("Product information");
    cy.contains("Description");
    cy.get("a").should("have.attr", "href", "/");
  });

  it("Has a delete button that opens/closes confirmation", () => {
    cy.get("[data-cy=products-list]")
      .children()
      .first()
      .click();
    cy.get("[data-cy=delete-button]").click();
    cy.get("[data-cy=confirmation-card]").should("exist");

    cy.get("button")
      .contains("No")
      .click();

    cy.get("[data-cy=confirmation-card]").should("not.exist");
    cy.get("[data-cy=delete-button]").click();
    cy.get("button")
      .contains("Yes")
      .click();
    cy.location("pathname").should("eq", "/");
  });
});
