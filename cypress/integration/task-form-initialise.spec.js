

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

    it("item list should have class success", () => {
        cy.get(".task-list div")
            // cy.get('[type="checkbox"]')
            .should("have.class", "notSuccess")
    })
    it("item lshould have color green on completed status", () => {
        // cy.get(".success")
        cy.get('[type="checkbox"]').check()
            // .cy.type("{enter}")
            .should("have.class", "text-success")
    })

});