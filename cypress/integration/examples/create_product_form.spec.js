describe("CreateProductFormPage and ProductPage", () => {
  const name = "Test";
  const priceEuros = 2;
  const priceCents = 99;
  const pricePerKg = 13;
  const description = "Some description.";

  it("Creates a product", () => {
    cy.visit("/create");
    cy.get("[data-cy=submit-button]", { timeout: 20000 }).should("be.disabled");
    cy.fillGeneralInfo(name, priceEuros, priceCents, pricePerKg, description);
    cy.fillDescription(description);
    cy.addImage();
    cy.get('[type="checkbox"]')
      .first()
      .should("be.checked");

    cy.get("[data-cy=submit-button]").should("not.be.disabled");
    cy.get("[data-cy=submit-button]").click();
    cy.contains("Loading");
    cy.location("pathname").should("eq", "/");
  });

  it("Shows the correct information about the created product", () => {
    cy.visit("/");

    cy.get(`[data-cy=${name}-product]`, { timeout: 20000 })
      .children()
      .should("contain", name)
      .and("be.visible");

    cy.get("[data-cy=products-list]")
      .children()
      .last()
      .click();
    cy.location("pathname").should("include", "/product");

    cy.get("[data-cy=product-page]")
      .children()
      .should("contain", name)
      .and("contain", `${priceEuros}.${priceCents}/kpl`)
      .and("contain", `${pricePerKg}/kg`)
      .and("contain", description)
      .and("contain", "Gluten-free");
  });

  it("Has the right text and buttons", () => {
    cy.visit("/create");

    cy.get("form", { timeout: 20000 });
    cy.contains("Product information");
    cy.contains("General information");
    cy.contains("Description");
    cy.get("label").contains("Gluten-free");
    cy.get("label").contains("Lactose-free");
    cy.get("label").contains("Vegan");
    cy.get("[data-cy=cancel-button]").click();
    cy.get("a").should("have.attr", "href", "/");
    cy.contains("Are you sure you want to leave?");
    cy.get("button")
      .contains("No")
      .click();
  });
});
