

describe('App Initialisation', () => {
    // beforeEach(()=>{

    // });

    it("Should load data from api on componentDidMount", () => {


        cy.server()
        cy.route("GET", "api/task", "fixture:tasks")
        cy.visit("/")
        cy.get(".task-list li")
            .should("have.length", 3)

    })

    it("item list should have checkbox", () => {
        // cy.get(".task-list li")
        cy.get('[type="checkbox"]')
            .should("have.class", "check-box")
    })

    it("On Clicking CheckBox Add Class Success", () => {

        cy.get(".task-list li ")

            .should("have.class", "notSuccess")
    })

});