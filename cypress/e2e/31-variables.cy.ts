let externalVariable: string = "test";
describe("Basics", () => {
beforeEach(() => {
    cy.visit(`dynamicid`);
})
it("Find by text", function () {
    let text = cy.contains('button', 'Button with Dynamic ID')
    .invoke('text') //to find text of that btn
    .then((text) => {
        externalVariable = text;
        cy.wrap(externalVariable).as('textFromContains')
        cy.log(externalVariable);
    });
        cy.get('@textFromContains').then((text) => { //use @ to access text outside of contains
        cy.log('This is the contains text outside the closure: ' + text)
    })
 });

it("Sharing context by Alias", function () {
        externalVariable: this.textFromContains;
        cy.log(externalVariable);
});
});