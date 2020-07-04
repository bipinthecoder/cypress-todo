describe('Task form submit', () => {
    
    beforeEach(()=>{
        cy.visit("/")
    });

    it("Add a new item on submit of form",()=>{
        const text = "Buy Milk"    //cypress lets us create our own Server
        cy.server()
        cy.route("POST","/api/task",{
            title:text,
            id:1,
            completed:false
        })
        cy.get(".task-input")
        .type(text)
        .type("{enter}")

        cy.get(".task-list li")
        .should("have.length",1)
        .and("contain",text)
    })

    it.only("Add a new item, on failure show error message",()=>{
        const text = "Buy Milk"    //cypress lets us create our own Server
        cy.server()
        cy.route({
            url:"/api/task",
            status:500,
            method:"POST",
            response:{}
        })

        cy.get(".task-input")
        .type(text)
        .type("{enter}")

        cy.get(".error")
        .should("be.visible")
    })
});