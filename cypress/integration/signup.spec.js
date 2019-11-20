/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.findByText(/Sign Up as a Donor/i).click();
  });

  it("signs up a donor successfully", () => {
    cy.findByLabelText(/First Name/i)
      .type("Jane")
      .should("have.value", "Jane");
    cy.findByLabelText(/Last Name/i)
      .type("Doe")
      .should("have.value", "Doe");
    cy.findByLabelText(/Email Address/i)
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
    cy.findByLabelText(/Blood Group/i).click();
    cy.focused().type("{downarrow}{downarrow}{enter}");
    cy.findByTestId("bloodGroup").should("have.value", "B_positive");
    cy.findByLabelText(/Street Address/i)
      .type("1 Random Street")
      .should("have.value", "1 Random Street");
    cy.findByLabelText(/Local Government/i)
      .type("Local Government")
      .should("have.value", "Local Government");
    cy.findByLabelText(/State/i)
      .type("Lagos")
      .should("have.value", "Lagos");
    cy.findByLabelText(/^Password/i)
      .type("somepasswordofacceptablelength")
      .should("have.value", "somepasswordofacceptablelength");
    cy.findByLabelText(/Verify Password/i)
      .type("somepasswordofacceptablelength")
      .should("have.value", "somepasswordofacceptablelength");

    cy.server();
    cy.route({
      status: 201,
      method: "POST",
      url: "**/users/signup",
      response: {
        token: "some-valid-token",
        user: {
          username: "Jane Doe",
          isDonor: true
        }
      }
    }).as("donorSignup");
    cy.route({
      status: 200,
      method: "GET",
      url: "**/user",
      response: {
        currentUser: {
          username: "Jane Doe",
          isDonor: true
        }
      }
    }).as("getUser");

    cy.findByText(/Proceed/i).click();
    cy.wait("@donorSignup");
    cy.wait("@getUser");
    cy.location().should(location => {
      expect(location.pathname).to.eq("/dashboard");
      expect(localStorage.getItem("token")).to.eq("some-valid-token");
      expect(localStorage.getItem("loggedUser")).to.eq("Jane Doe");
    });
  });
});
