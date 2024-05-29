import { BasePage } from "./base.page";
 
export class TextboxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullnameTextField() {
    return cy.get("[placeholder='Full Name']");
  }

  static get userEmailField() {
    return cy.get("[id='userEmail']");
  }

  static get currentAddressField() {
    return cy.get("[id='currentAddress']");
  }

  static get permanentAddressField() {
    return cy.get("[id='permanentAddress']");
  }

  static get submitButton() {
    return cy.get("[id='submit']");
  }

  static get nameOutput() {
    return cy.get("[id='name']");
  }

  static get emailOutput() {
    return cy.get("[id='email']");
  }

  static get currentAddressOutput() {
    return cy.get("p[id='currentAddress']");
  }

  static get permanentAddressOutput() {
    return cy.get("p[id='permanentAddress']");
  }
}