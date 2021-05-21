describe('Lambda Eats', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/pizza')
    })

    it('confirm test operation', () => {
        expect(1 + 1).to.equal(2)
    })

    const nameInput = () => cy.get('input[id="name-input"]')
    const sizeInput = () => cy.get('select[id="size-dropdown"]')
    const sausageInput = () => cy.get('input[name="sausage"]')
    const pepperoniInput = () => cy.get('input[name="pepperoni"]')
    const pineappleInput = () => cy.get('input[name="pineapple"]')
    const anchoviesInput = () => cy.get('input[name="anchovies"]')
    const peppersInput = () => cy.get('input[name="peppers"]')
    const subBtn = () => cy.get('button[id="order-button"]')


    it('name input works', () => {
        nameInput().should('exist')
        nameInput().type('helloworld')
        nameInput().should('have.value', 'helloworld')
    })

    it('topic selection works', () => {
        sausageInput().should('exist')
        sausageInput().click()
        sausageInput().should('have.checked')
        sausageInput().click()
        sausageInput().should('not.have.checked')
        pineappleInput().should('exist')
        pineappleInput().click()
        pineappleInput().should('have.checked')
        pineappleInput().click()
        pineappleInput().should('not.have.checked')
        anchoviesInput().should('exist')
        anchoviesInput().click()
        anchoviesInput().should('have.checked')
        anchoviesInput().click()
        anchoviesInput().should('not.have.checked')
        peppersInput().should('exist')
        peppersInput().click()
        peppersInput().should('have.checked')
        peppersInput().click()
        peppersInput().should('not.have.checked')
        pepperoniInput().should('exist')
        pepperoniInput().click()
        pepperoniInput().should('have.checked')
        pepperoniInput().click()
        pepperoniInput().should('not.have.checked')
    })

    it('submit button requires certain data', () => {
        subBtn().should('be.disabled')
        nameInput().type('helloworld')
        subBtn().should('be.disabled')
        nameInput().clear()
        sizeInput().select('')
        subBtn().should('be.disabled')
        nameInput().type('helloworld')
        subBtn().should('be.disabled')
        nameInput().clear()
        sizeInput().select('small')
        subBtn().should('be.disabled')
        nameInput().type("helloworld")
        subBtn().should('not.be.disabled')
        sizeInput().select('medium')
        subBtn().should('not.be.disabled')
        sizeInput().select('large')
        subBtn().should('not.be.disabled')
    })

    

})