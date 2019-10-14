describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("http://ppisforlife.com/#/posts");
    cy.get(".bar_num").first().click();
    cy.get('.bar').then(els => { 
        console
        expect(els[1].className).to.deep.eq('selected_bar')
      })
  });
});
