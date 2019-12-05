/// <reference types="Cypress" />
import faker from 'faker'
import schema from "../../app-schema.json";
const user = {
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  isDonor: true
};
const password = faker.internet.password(16)
const street = faker.address.streetAddress()
const lg = faker.address.county()
const state = faker.address.state()
const phone = faker.phone.phoneNumber()

context("Actions", () => {
  beforeEach(() => {
    cy.server({ method: "POST", status: 201 });
    cy.mockGraphql({
      schema,
      endpoint: Cypress.env("serverUrl")
    }).as("mockGraphqlOps");
    cy.mockGraphqlOps({
      operations: {
        getCurrentUser: {
          getCurrentUser: null
        }
      }
    });
    cy.route("/sockjs-node", {});
    cy.visit("/");
    cy.findByText(/Sign Up as a Donor/i).click();
  });

  it("signs up a donor successfully", () => {
    const {firstName, lastName} = user
    cy.mockGraphqlOps({
      operations: {
        userRegister: {
          userRegister: {
            user,
            token: "Bearer sometoken"
          }
        },
        getCurrentUser: {
          getCurrentUser: null
        }
      }
    });
    cy.findByLabelText(/First Name/i)
      .type(firstName)
      .should("have.value", firstName);
    cy.findByLabelText(/Last Name/i)
      .type(lastName)
      .should("have.value", lastName);
    cy.findByLabelText(/Email Address/i)
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
    cy.findByLabelText(/Blood Group/i).click();
    cy.focused().type("{downarrow}{downarrow}{enter}");
    cy.findByTestId("bloodGroup").should("have.value", "B_positive");
    cy.findByLabelText(/Street Address/i)
      .type(street)
      .should("have.value", street);
    cy.findByLabelText(/Local Government/i)
      .type(lg)
      .should("have.value", lg);
    cy.findByLabelText(/State/i)
      .type(state)
      .should("have.value", state);
    cy.findByLabelText(/Phone/i)
      .type(phone)
      .should("have.value", phone);
    cy.findByLabelText(/^Password/i)
      .type(password)
      .should("have.value", password);
    cy.findByLabelText(/Verify Password/i)
      .type(password)
      .should("have.value", password);

    cy.findByText(/Proceed/i).click();
    cy.wait(200);
    cy.location().should(location => {
      expect(location.pathname).to.eq("/dashboard");
      expect(localStorage.getItem("token")).to.eq("Bearer sometoken");
    });
  });
});
