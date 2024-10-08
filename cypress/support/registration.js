export class Registration{
    fileUpload(){
        const fileName = 'image.jpg';
        cy.get('input[type="file"]').attachFile(fileName);
    }
    getUsername(username){
        return cy.get('#g2599-name').clear().type(username);
    }
    getEmail(email){
        return cy.get('#g2599-email').clear().type(email);
    }
    getWebsite(website){
        cy.get('#g2599-website').clear().type(website);
    }
    getExperience(experience){
        cy.get('#g2599-experienceinyears').select(experience);
    }
    getExpertise(){
        cy.get('input[type="checkbox"][value="Functional Testing"]').check();
    }
    getEducation(){
        cy.get(':nth-child(2) > .radio').click();
    }
    getAlertbox(){
        cy.get('[onclick="myFunction()"]').click();
    }
    getComment(comment){
        cy.get('#contact-form-comment-g2599-comment').clear().type(comment);
    }
    getButton(){
        cy.get('.pushbutton-wide').click();
    }
}