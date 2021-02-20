/**
 * http://localhost:8080/dashboard
 * Dashboard component
 */
describe("Dashboard component aplication test", () => {
  it("Test home component https://localhost/login-help", () => {
    // 1. Go to home url https://localost:8080/signup
    cy.visit("/login-help");

    // 2. Test login without password and email
    cy.get("#email-address").type("example@example.com");
    cy.get("#reset_button").click();

    // 2 . Redirect to login
    cy.location("pathname").should("be eq", "/login-help");

    // 3 Test success login
  });
});
