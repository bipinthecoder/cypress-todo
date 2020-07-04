describe('Check Toggle Status', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it("On Clicking CheckBox Add Class Success", () => {
        // cy.server()
        // cy.route("POST", "/api/task", {
        //     title: text,
        //     id: 1,
        //     completed: false
        // })
        // cy.visit("/")
        // cy.get(".task-input")
        //     .type(text)
        //     .type("{enter}")
        //     .type(text)
        //     .type("{enter}")

        cy.get(".task-list li ")

            .should("have.class", "notSuccess")
    })


});