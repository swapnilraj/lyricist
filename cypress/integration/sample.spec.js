describe('My first test', () => {
  it('Does not do much', () => {
    cy.visit('https://www.youtube.com/watch?v=bpOSxM0rNPM');

    cy.get('#lyrics');
  });
});
