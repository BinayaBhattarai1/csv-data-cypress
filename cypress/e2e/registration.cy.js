import { Registration } from "../support/registration";
import Papa from 'papaparse';
describe("Registration", () => {
  it("Register User", () => {
    const register = new Registration();
    const csvFilePath = "data/testdata.csv";
    const pageUrl="https://www.globalsqa.com/samplepagetest/"
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(pageUrl);
    cy.readFile(csvFilePath).then((csvData) => {
      const data = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      data.forEach((row) => {
        const name = row.username;
        const email=row.email;
        const web=row.website;
        const exp=row.experience;
        const comment=row.comment;
        register.fileUpload();
        register.getUsername(name);
        register.getEmail(email);
        register.getWebsite(web);
        register.getExperience(exp);
        register.getExpertise();
        register.getEducation();
        register.getAlertbox();
        register.getComment(comment);
        register.getButton();
        cy.visit(pageUrl);
      });
    });
  });
});
