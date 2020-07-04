

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
<<<<<<< HEAD
    it("item list should have class success",()=>{
        cy.get(".task-list div")
        // cy.get('[type="checkbox"]')
        .should("have.class","notSuccess")
    })
    it("item lshould have color green on completed status",()=>{
        // cy.get(".success")
        cy.get('[type="checkbox"]').check()
        // .cy.type("{enter}")
        .should("have.class","text-success")
    })
=======

>>>>>>> 203db75b99687e79fae9856f0fdb9be3a1a834b3
});