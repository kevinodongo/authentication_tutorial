/**
 * http://localhost:8080/
 * Home component
 */
describe("Home component aplication test", () => {
  it("Test home component https://localhost/", () => {
    // 1. Go to home url https://localost:8080/
    cy.visit("/");

    // 2 . Test the get started button
    cy.get("#started_link").click();
    cy.location("pathname").should("eq", "/signup");

    // 3. Get back to the home page
    cy.get("#logo_image").click();
    cy.location("pathname").should("eq", "/");

    // 3. Test the demo button
    cy.get("#demo_link").click();
    cy.location("pathname").should("eq", "/");

    // 4. Test the menu button
    cy.get("#main_menu").click();

    // 5. Test the signup button
    cy.get("#signup_button").click();
    cy.location("pathname").should("eq", "/signup");

    // 6. Get back to the home page
    cy.get("#logo_image").click();
    cy.location("pathname").should("eq", "/");

    // 7. Test the menu button
    cy.get("#main_menu").click();

    // 8. Test the login button
    cy.get("#login_button").click();
    cy.location("pathname").should("eq", "/login");

    // 9. Get back to the home page
    cy.get("#logo_image").click();
    cy.location("pathname").should("eq", "/");
    // end
  });
});
