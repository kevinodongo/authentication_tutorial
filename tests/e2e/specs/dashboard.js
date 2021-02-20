/**
 * http://localhost:8080/dashboard
 * Dashboard component
 */
describe("Dashboard component aplication test", () => {
  it("Test home component https://localhost/dashboard", () => {
    // 1. Go to home url https://localost:8080/dashboard
    cy.visit("/dashboard");

    // 2 . Redirect to login
    cy.location("pathname").should("be eq", "/");

    // 3 Test success login

    // 4. Test logout
  });
});
