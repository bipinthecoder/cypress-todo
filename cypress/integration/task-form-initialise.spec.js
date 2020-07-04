

describe('App Initialisation', () => {
    // beforeEach(()=>{
        
    // });

    it.only("Should load data from api on componentDidMount",()=>{
        

        cy.server()
        cy.route("GET","api/task","fixture:tasks")
        cy.visit("/")
        cy.get(".task-list li")
        .should("have.length",3)
       
    })
});