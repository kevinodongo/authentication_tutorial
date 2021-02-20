/**
 * http://localhost:8080/dashboard
 * Login component
 */
describe("Login component aplication test", () => {
  it("Test home component https://localhost/login", () => {
    // 1. Go to home url https://localost:8080/login
    cy.visit("/login");

    // 3. Input password and email
    cy.get("#email-address").type("example@example.com");
    cy.get("#password").type("123456");

    // 4. Should be redirected to dashboard"
    cy.get("#signing_button").click();
    cy.location("pathname").should("eq", "/dashboard");

    // 2. Test login without password and email
    cy.get("#user_menu").click();
    cy.get("#signout_button_large_screen").click();
    cy.location("pathname").should("eq", "/");
  });
});
