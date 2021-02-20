/**
 * http://localhost:8080/signup
 * Signup component
 */
describe("Signup component aplication test", () => {
  it("Test signup component https://localhost/signup", () => {
    // 1. Go to home url https://localost:8080/signup
    cy.visit("/signup");

    // 3. Input password and email
    cy.get("#email-address").type("example@example.com");
    cy.get("#password").type("123456");

    // 4. Should be redirected to dashboard"
    cy.get("#register_button").click();
    // cy.location("pathname").should("eq", "/");

    // // 2. Test login without password and email
    // cy.get("#logo_image").click();
    // cy.location("pathname").should("eq", "/signup");
  });
});
