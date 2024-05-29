import { BasePage } from "./base.page";
 
export class CheckboxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get expandButton() {
    return cy.get("[title='Expand all']");
  }

  static get checkboxes() {
    return cy.get("[class='rct-title']");
  }

  static get checkedCheckboxesOutput() {
    return cy.get("[id='result']");
  }

  static get textSuccess() {
    return cy.get(".text-success");
  }
}