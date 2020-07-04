describe("Task input form",()=>{

    beforeEach(()=>{
        cy.visit("/")
    })



    it("visit home page",()=>{
        // cy.visit("http://localhost:3000/")

        cy.focused()
        .should("have.class","task-input")
    })


    it("type a value into input tag",()=>{
        // cy.visit("http://localhost:3000/")

        const text = "Buy Books"

        cy.get(".task-input").type(text)
        .should("have.value",text)
    })
})