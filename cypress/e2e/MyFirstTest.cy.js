describe("MyFirstTest", () => {
    // This will run before each test case
    beforeEach(() => {
      cy.visit('https://www.omniactivefitness.com/'); // Open the website
      
    });
  
    it("Testcase001 - Verify Title page - Positive", () => {
      // Verify that the page title contains "Muhammad Ali"
      cy.title().should('contain', 'Personal Training');
    });
  
    it("Testcase002 - Go to Contact us page", () => {
      cy.get('#comp-krajyxkk7label').click();
      cy.url().should('contain', "contact")
      .and('exist')
    });
  
    it("Testcase003 - Fill the contact us form", () => {
      cy.get('#comp-krajyxkk7label').click()
      //cy.title().should('contain',"Contact Us")

      cy.get('#input_comp-lvr8f79e2').type('Zaa') //firstname
      cy.get('#input_comp-lvr8f79h4').type('Im') //lastname
      cy.get('#input_comp-m18nse4z').type('+3584529999000') //phonenumber
      cy.get('#input_comp-lvr8f79j1').type('Zaa@z.com')  //email
      cy.get('#textarea_comp-lvr8f79k6').type('Hello, Trying to know if this email works or not')
      setTimeout(6000)
      //cy.get('#collection_comp-lvr8f79m6').select('Fundraisers')
      cy.get('option.R4tv1w').select('Option 1').should('have.value', 'New Client');
      ///cy.get('[data-testid="buttonElement"]').click()
      //cy.get('.error-message').should('be.visible') 
      //.and('contain', 'successful')

      
    });
  });