describe("AvailableProductsPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows loading, displays correct title, has a link to the form for creating a product.", () => {
    cy.contains("Loading");
    cy.get("[data-cy=create-product-button]", { timeout: 20000 }).should(
      "have.attr",
      "href",
      "/create"
    );
    cy.contains("Available products");
  });
});
